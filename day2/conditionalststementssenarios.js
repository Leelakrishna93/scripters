// // ==============================================
// COMPLEX NESTED IF SCENARIOS
// ==============================================


// Scenario 1: Banking Loan Approval Workflow

// Requirement:
// Determine whether a customer is eligible for loan approval.

// Constraints:
// const customerAge = 20;
// const monthlySalary = 5000;
// const creditScore = 780;

// if(customerAge >= 21){
//     if(monthlySalary >= 55000 || monthlySalary >= 100000){
//         if(creditScore <= 790){
//             console.log(`Loan Approved`);
//         }else{
//             console.log(`loan Rejected becaues of Requirements not Matched`);
//         }
//     }else{
//         console.log(`salary is lower because bank not provide `);
//     }
// } else{
//     console.log(`age is not supported to approve loan`);
// }


// --------------------------------------------------


// Rules:
// Age >= 21
// Salary >= 50000
// Credit Score >= 750

// Expected:
// Loan Approved
// OR
// Proper rejection reason.
// Scenario 2: Corporate System Access Control

// Requirement:
// Allow access to production servers.

// // Constraints:
// const isEmployee = true;
// const isMFAEnabled = true;
// const securityTrainingCompleted = true;

// if(isEmployee){
//     if(isMFAEnabled){
//         if(securityTrainingCompleted){
//             console.log(`Access Allowed`);
//         }else{
//             console.log(`Access Denaid, Security Training Is Not Completed.`);
//         }
//     }else{
//         console.log(`isMFAEnabled.`);
//     }
// }else{
//     console.log(`Employee Details are Not Matching.`)
// }


// Rules:
// Verify Employee.
// Verify MFA.
// Verify Security Training.
// Then allow access.





// ==============================================
// PRODUCTION GRADE CHALLENGE SCENARIOS
// ==============================================


// Scenario 1: E-Commerce Checkout Validation

// Requirement:
// Allow order placement only after all validations pass.

// Constraints:
// const isLoggedIn = true;
// const cartItems = 3;
// const shippingAddressAvailable = true;
// const paymentMethodSelected = true;

// if (isLoggedIn){
//     if(cartItems === 3){
//         if(shippingAddressAvailable){
//             if(paymentMethodSelected){
//                 console.log(`Order Placed Successfully`);
//             }else{
//                 console.log(`Appropriate validation error.`);
//             }
//         }
//     }
// }

// Rules:
// User must be logged in.
// Cart must contain at least one item.
// Shipping address must exist.
// Payment method must be selected.

// Expected:
// Order Placed Successfully
// OR
// Appropriate validation error.


// --------------------------------------------------


// Scenario 2: LMS Course Enrollment Validation

// Requirement:
// Allow enrollment into advanced course.

// // Constraints:
// const studentLoggedIn = true;
// const prerequisiteCompleted = true;
// const courseSeatsAvailable = true;
// const feePaid = false;

// if(studentLoggedIn){
//     if(prerequisiteCompleted){
//         if(courseSeatsAvailable){
//             if(feePaid){
//                 console.log(`Enrollment Successful`);
//             }else{
//                 console.log(`Payment is Not Completed`);
//             }
//         }else{
//             console.log(`Seats Are Aot Availabe`);
//         }
//     }else{
//         console.log(`Requirements are not Matched`);
//     }
// }else{
//     console.log(`Invalid StudentID`);
// }
// Rules:
// Verify Login.
// Verify Prerequisite.
// Verify Seat Availability.
// Verify Fee Payment.

// Expected:
// Enrollment Successful
// OR
// Exact reason for failure.


// ==============================================
// ADVANCED REAL-TIME SCENARIOS
// ==============================================


// Scenario 1: Hospital Appointment Booking

// Constraints:
const doctorAvailable = true;
const patientRegistered = true;
const insuranceVerified = false;
// if(doctorAvailable){
//     console.log(`Checking doctor is available or not.`);
//     console.log(`Verifyied doctor is available`);
//     if(patientRegistered){
//         console.log(`Patient is registering for doctor appointment.`);
//         console.log(`Patient is registering in process...`);
//         console.log(`Patient is registered for doctor appointment`);
//         if(!insuranceVerified ){
//             console.log(`insurance Verified is checking.`);
//             console.log(`insurance Verified successfully`);
//             console.log(`Appointment Is Booked on dd/mm/yyyy`);
//         }else{
//             console.log(`Documents are not Valid.`)
//         }
//     }
// }
// another:
// switch(doctorAvailable){
//     case doctorAvailable:
//         console.log(`Checking doctor is available or not.`);
//         console.log(`Verifyied doctor is available.`);
//     switch(patientRegistered){
//         case patientRegistered :
//             console.log(`Patient is registering for doctor appointment.`);
//             console.log(`Patient is registering in process...`);
//             console.log(`Patient is registered for doctor appointment.`);
//             switch (!insuranceVerified){
//                 case insuranceVerified:
//                     console.log(`insurance is checking.`);
//                     console.log(`insurance Verified successfully.`);
//                     console.log(`Appointment Confirmed.`);
//                     break;
//                 default:
//                     console.log(`Documents are not Valid.`)
//             }
//     }
// }
// // Another Format
// switch(doctorAvailable){
//     case doctorAvailable:
//         console.log(`Checking doctor is available or not.`);
//         console.log(`Verifyied doctor is available.`);
//     case patientRegistered :
//         console.log(`Patient is registering for doctor appointment.`);
//         console.log(`Patient is registering in process...`);
//         console.log(`Patient is registered for doctor appointment.`);
        
//     case insuranceVerified:
//         console.log(`insurance is checking.`);
//         console.log(`insurance Verified successfully.`);
//         console.log(`Appointment Confirmed.`);
//         break;
//     default:
//         console.log(`Documents are not Valid or details are not matched or insurance is not valid`);
// }   

// Rules:
// Check patient registration.
// Check doctor availability.
// Check insurance verification.
// Then allow appointment booking.


// --------------------------------------------------


// Scenario 2: Job Application Screening

// Constraints:
const experienceYears = 6;
const skillsMatched = true;
const degreeVerified = true;

// EX!:
// if(experienceYears >= 3 && skillsMatched && degreeVerified){
//     console.log(`Eligible for Interview`);
// }else{
//     console.log(`Rejected with proper reason`);
// }

// EX2:
if (experienceYears >= 3){
    if(skillsMatched){
        if(degreeVerified){
            console.log(`Eligible for Interview`);
        }
    }
    
}else{
        console.log(`Not Eligible for Interview`);
    }

// Rules:
// Minimum experience = 3 years.
// Skills must match.
// Degree must be verified.

// Expected:
// Eligible for Interview
// OR
// Rejected with proper reason.