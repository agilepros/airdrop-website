#Quick and Dirty :P
#greetings, seven

import sqlite3
import pymongo
import logging
from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update
from telegram.ext import Updater, CommandHandler, CallbackQueryHandler, CallbackContext

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)
logger = logging.getLogger(__name__)

########################################################
myclient = pymongo.MongoClient("mongodb+srv://<USER>:<PW>@recipient.cjp6x.mongodb.net/Recipient")
mydb = myclient["Recipient"]
mycol = mydb["recipients"]


def insertToMainDB(BscAddress):
    AddingString = {"address":BscAddress.lower(), "basicAllocation":"5000000000000000000","bonusAllocation":"5000000000000000000","totalAllocation":"10000000000000000000"}
    print(AddingString)
    x = mycol.insert_one(AddingString)
    print(x.inserted_id)


########################################################

#globals
db = r"DB-AIRDROP.db"
token = "<TELEGRAM-TOKEN>"

######################################
######################################
# Address 
######################################
######################################
def checkAddress(BscAddress):
    if len(BscAddress) == 42:
        return True
    else:
        return False

######################################
######################################
# SQLite Functions
######################################
######################################

def insertUser(TgUserID, BscAddress):
    with sqlite3.connect(db) as conn:
        cursor = conn.cursor()
        reward = str(10000000000000000000)
        execu = "INSERT INTO Airdrop (TgUserID, BscAddress, TIGSReward) VALUES ( ?, ?, ?)"
        cursor.execute(execu,(TgUserID, BscAddress, reward))
        conn.commit()
    

def CheckUser(TgUserID, BscAddress, UserName, um):
    with sqlite3.connect(db) as conn:
        cursor = conn.cursor()
        TGUserFetch = "SELECT TgUserID FROM Airdrop WHERE TgUserID='{}'".format(TgUserID)
        TgID = cursor.execute(TGUserFetch).fetchall()
        if len(TgID) == 0:
            print(TgUserID,"Not Found")
            AddressFetch = "SELECT BscAddress FROM Airdrop WHERE BscAddress='{}'".format(BscAddress)
            Address = cursor.execute(AddressFetch).fetchall()
            if len(Address) == 0:
                insertUser(TgUserID, BscAddress )
                insertToMainDB(BscAddress.lower())
                succesfullReg(UserName, BscAddress, um)
            else:
                With = "Binance Smart Chain Address"
                AlreadyReg(UserName, With, um)
        else:
            With = "Telegram Account"
            AlreadyReg(UserName, With, um)


######################################
######################################
# Messages Back
######################################
######################################
def succesfullReg(UserName, BscAddress, um):
    msg = f"Welcome {UserName} to TradingTigers Airdrop,\nyou now in the Airdrop with address {BscAddress}!\n\nClaim your Tokens now at airdrop.trading-tigers.com"
    um.reply_text(msg)

def AlreadyReg(UserName, With, um):
    msg = f"Hey {UserName},\nyoure *already* in the Airdrop, with your {With}!"
    um.reply_text(msg)

def WrongAddress(UserName, um):
    msg = f"Hey {UserName},\nyoure address is wrong!"
    um.reply_text(msg)



def start(update: Update, context: CallbackContext):
    um = update.message
    BscAddress = update.message.text.split()[1].lower()
    user = update.message.from_user
    userID = user["id"]
    UserName = user["first_name"]
    if checkAddress(BscAddress) == True:
        CheckUser(TgUserID=userID, BscAddress=BscAddress, UserName=UserName , um=um)
    else:
        WrongAddress(UserName, um)



def button(update: Update, context: CallbackContext):
    query = update.callback_query
    query.answer()
    print(query.data)
    if int(query.data) == int(1):
        print("Button 1")
    query.edit_message_text(text=f"Selected option: {query.data}")


def help_command(update: Update, context: CallbackContext):
    update.message.reply_text("""Command:
/JoinAirdrop <Your BSCADDRESS>
    """)
    
def main():
    updater = Updater(token)
    updater.dispatcher.add_handler(CommandHandler('JoinAirdrop', start))
    updater.dispatcher.add_handler(CommandHandler('start', help_command))
    updater.dispatcher.add_handler(CallbackQueryHandler(button))
    updater.dispatcher.add_handler(CommandHandler('help', help_command))
    updater.start_polling()
    updater.idle()


if __name__ == '__main__':
    main()
