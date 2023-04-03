reminder_schedule = {
    "email": {
        "reminder1": {
            "hour": 168,
            "minute": 0,
            "second": 0,
            "message": `Hello ${patientFirstName},\n\n
            This is a reminder that you have an appointment with ${doctorFirstName} ${doctorLastName} on ${appointmentDate} at ${appointmentTime}.\n\n
            Please arrive 15 minutes early to your appointment to ensure a smooth schedule is maintained and to allow for any unexpected delays.\n\n
            If you are unable to make your appointment, please contact us at ${practiceContactNumber} to reschedule.\n\n
            "Thank you for choosing ${practiceName}! We look forward to seeing you soon.`
        },
        "reminder2": {
            "hour": 24,
            "minute": 0,
            "second": 0,
            "message": `Hello ${patientFirstName},\n\n
            This is a reminder that you have an appointment with ${doctorFirstName} ${doctorLastName} tomorrow at ${appointmentTime}.\n\n
            Please arrive 15 minutes early to your appointment to ensure a smooth schedule is maintained and to allow for any unexpected delays.\n\n
            If you are unable to make your appointment, please contact us at {practiceContactNumber} to reschedule.\n\n
            Thank you for choosing ${practiceName}! We look forward to seeing you soon.`
        },
        "reminder3": {
            "hour": 1,
            "minute": 0,
            "second": 0,
            "message": `Hello ${patientFirstName},\n\n
            This is a reminder that you have an appointment with ${doctorFirstName} ${doctorLastName} in 1 hour at ${appointmentTime}.\n\n
            Please arrive 15 minutes early to your appointment to ensure a smooth schedule is maintained and to allow for any unexpected delays.\n\n
            If you are unable to make your appointment, please contact us at ${practiceContactNumber} to reschedule.\n\n
            Thank you for choosing ${practiceName}! We'll see you soon.`
        }
    },
    "sms": {
        "reminder1": {
            "hour": 168,
            "minute": 0,
            "second": 0,
            "message": `Hi ${patientFirstName}, this is a reminder that you have an appointment with ${doctorFirstName} ${doctorLastName} on ${appointmentDate} at ${appointmentTime}. Please arrive 15 mins early. Call ${practiceContactNumber} to reschedule. - ${practiceName}`
        },
        "reminder2": {
            "hour": 24,
            "minute": 0,
            "second": 0,
            "message": `Hi ${patientFirstName}, this is a reminder that you have an appointment with ${doctorFirstName} ${doctorLastName} tomorrow at ${appointmentTime}. Please arrive 15 mins early. Call ${practiceContactNumber} to reschedule. - ${practiceName}`
        },
        "reminder3": {
            "hour": 1,
            "minute": 0,
            "second": 0,
            "message": `Hi ${patientFirstName}, this is a reminder that you have an appointment with ${doctorFirstName} ${doctorLastName} in 1 hour at ${appointmentTime}. Please arrive 15 mins early. Call ${practiceContactNumber} to reschedule. - ${practiceName}`
        }
    }
}