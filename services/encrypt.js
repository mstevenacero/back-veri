import bcrypt from "bcrypt"

async function encrypted (pass){
    let key =  await bcrypt.hash(pass,10)
   
    return key

}
async function compare (pass,hash){
    let key = await bcrypt.compare(pass,hash)
    return key
}


export default {
    encrypted,
    compare
}