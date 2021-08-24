import { useState, useEffect } from 'react';
import axios from 'axios';
import Web3 from 'web3';
import getBlockchain from '../lib/ethereum.js';
import Header from './components/layout/Header.js';
import Footer from './components/layout/Footer.js';
import Image from './components/elements/Image.js';





export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState('Please Connect Your Metamask!');
  const [claimMessage, setClaimMessage] = useState({
    payload: undefined,
    type: undefined
  });
  const [airdrop, setAirdrop] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      try { 
        const { airdrop, accounts } = await getBlockchain();
        setAirdrop(airdrop);
        setAccounts(accounts);
        setLoading(false);
      } catch(e) {
        setLoadingMessage(e);
      }
    };
    init();
  }, []);




  const claimTokens = async e => {
    e.preventDefault();
    const address = e.target.elements[0].value.trim().toLowerCase();
    setClaimMessage({
      type: 'primary',
      payload: 'Checking your address in whitelist...'
    });
    try {
      const response = await axios.post(
        '/api/authorization', 
        {
          address
        }
      );
      setClaimMessage({
        type: 'primary',
        payload: `
          Claiming token from Airdrop contract...
          Address: ${response.data.address}
          Total Amount: ${Web3.utils.fromWei(response.data.totalAllocation.toString())} TIGS
          -> Basic: ${Web3.utils.fromWei(response.data.basicAllocation.toString())} TIGS
          -> Bonus: ${Web3.utils.fromWei(response.data.bonusAllocation.toString())} TIGS
        `
      });
      const receipt = await airdrop
        .methods
        .claimTokens(
          response.data.address, 
          response.data.totalAllocation.toString(),
          response.data.signature
        )
        .send({from: accounts[0]});
      setClaimMessage({
        type: 'primary',
        payload: `Airdrop success!
Tokens successfully in tx ${receipt.transactionHash} 
Address: ${response.data.address}
Total Amount: ${Web3.utils.fromWei(response.data.totalAllocation.toString())} TIGS
-> Basic: ${Web3.utils.fromWei(response.data.basicAllocation.toString())} TIGS
-> Bonus: ${Web3.utils.fromWei(response.data.bonusAllocation.toString())} TIGS
        `
      });
    } catch(e) {
      if(e.message === 'Request failed with status code 401') {
        console.log(e)
        setClaimMessage({
          type: 'danger',
          payload: `Airdrop failed Reason:
Address not registered`
        });
        return;
      }
      setClaimMessage({
        type: 'danger',
        payload: `Airdrop failed Reason:
Airdrop already sent to ${address}`
      });
    }
  };









  return (
    
    <div className='body-wrap'>
      <Header navPosition="right" className="reveal-from-bottom is-revealed" />
      <main className='site-content'>
        <section className="features-split section illustration-section-01">
          <div className="container">
            <div className="card-body card-gray">
              <div className="container-xs center-content">
                <h2>TradingTigers Airdrop</h2>
                <Image src="https://trading-tigers.com/assets/img/airdrop-icon.svg" width={140}/>
              </div>
              <h5 className="card-title testimonial-item-footer has-top-divider">How to Get in the Airdrop?</h5>
              <div className="card-text ">
                <ul>
                  <li>Step 1: Join our <a target="_blank"href="https://t.me/tradingtigerschat">Telegram chat!</a></li>
                  <li>Step 2: Write in the chat "/JoinAirdrop 0x3a0E4Fc1Ff11b... (your BSC Address!)"</li>
                </ul>
              </div>
                <h5 className="card-title testimonial-item-footer has-top-divider">Claim your tokens!</h5>
                <div className="card-text">
                  <ul>
                    <li>Attention: Those who have already registered on the old Airdrop page can now claim their tokens here.</li>
                    <p></p>
                    <li>Step 1: Make sure you have configured the BSC network with Metamask</li>
                    <li>Step 2: Enter your BSC address and click on Claim TIGS.</li>
                    <li>Step 3: Confirm the transaction to claim your TIGS tokens. This will send a transaction to the Airdrop smart contract</li>
                  </ul>
                </div>
            </div>
          </div>
        </section>
      
      {loading ? (
        <section className="features-split section illustration-section-01">
        <div className='container text-center '>
          <div className='section-inner'>
            <div className="card-gray">{loadingMessage}
            </div>
          </div>
        </div>
        </section>
      ) : null}

      {loading ? null : (
        <section className="testimonial section illustration-section-02">
              <div className="container">
                <div className="section-inner ">
                  <form className="form-inline card-gray" onSubmit={e => claimTokens(e)}>
                    <input type="text" className="form-control mb-2 mr-sm-2 col-sm-12" placeholder="BSC Address">
                    </input>
                    <button type="submit" className="btn button-primary mb-2 col-sm-12">
                      Claim TIGS
                    </button>
                    {typeof claimMessage.payload !== 'undefined' ?  (
                      <div className={`mb-2 col-sm-12 alert alert-${claimMessage.type}`} role="alert">
                        <span style={{ whiteSpace: 'pre' }}>
                          {claimMessage.payload}
                        </span>
                      </div>
                    ) : ''}
                    </form>
            </div>
            </div>
        </section>
      )}
    <Footer />
    </main>
    </div>
  );
}
