require('dotenv').config();

// Import Supabase Client
const { createClient } = require('@supabase/supabase-js')

// Import Twilio Client
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const supabaseUrl = 'https://dveuwgeqiwnbrmahlfpn.supabase.co' //edit this for  specific location of user list
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const sendSMS = async() => {

    // Request all rows from user_data
    let { data: user_data, error } = await supabase
        .from('user_data')
        .select('*')

    user_data.forEach(data => {
        client.messages
            .create({
                body: 'Have you received the Message?',
                from: 'INSERT YOUR TWILIO NUMBER HERE',
                to: data.phone_number
            })
            .then(message => console.log(message.sid));
    })
}

sendSMS()


