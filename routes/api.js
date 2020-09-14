const express = require("express");
const https   = require("https");
const router = express.Router();
const setquestion = require('../models/setquestion');

const mongoose = require("mongoose");


const db = "mongodb+srv://scholarprobe:FkfdIPmFjekAjQFB@scholarprobe.tzmyf.mongodb.net/scholarprobe?retryWrites=true&w=majority"

mongoose.connect(db, err => {
    if(err){
        console.log("Error"+ err);
    }else{
        console.log("connected to mongodb");
    }
});


router.get("/", (req, res)=>{
res.send("From api route");
});


 router.get('/contact-helpline', (req,res) => {
 let contacts = [{"loc": "Andhra Pradesh","number": "+91-866-2410978"},
  {"loc": "Arunachal Pradesh","number": "+91-9436055743"},
  {"loc": "Assam","number": "+91-6913347770"},
  {"loc": "Bihar","number": "104"},
  {"loc": "Chhattisgarh","number": "104"},
  {"loc": "Goa","number": "104"},
  {"loc": "Gujarat","number": "104"},
  {"loc": "Haryana","number": "+91-8558893911"},
  {"loc": "Himachal Pradesh","number": "104"},
  {"loc": "Jharkhand","number": "104"},
  {"loc": "Karnataka","number": "104"},
  {"loc": "Kerala","number": "+91-471-2552056"},
  {"loc": "Madhya Pradesh","number": "+91-755-2527177"},
  {"loc": "Maharashtra","number": "+91-20-26127394"},
  {"loc": "Manipur","number": "+91-3852411668"},
  {"loc": "Meghalaya","number": "108"},
  {"loc": "Mizoram","number": "102"},
  {"loc": "Nagaland","number": "+91-7005539653"},
  {"loc": "Odisha","number": "+91-9439994859"},
  {"loc": "Punjab","number": "104"},
  {"loc": "Rajasthan","number": "+91-141-2225624"},
  {"loc": "Sikkim","number": "104"},
  {"loc": "Tamil Nadu","number": "+91-44-29510500"},
  {"loc": "Telengana","number": "104"},
  {"loc": "Tripura","number": "+91-381-2315879"},
  {"loc": "Uttarakhand","number": "104"},
  {"loc": "Uttar Pradesh","number": "18001805145"},
  {"loc": "West Bengal","number": "1800313444222,+91-3323412600,"},
  {"loc": "Andaman and Nicobar Islands","number": "+91-3192-232102"},
  {"loc": "Chandigarh","number": "+91-9779558282"},
  {"loc": "Dadra and Nagar Haveli","number": "104"},
  {"loc": "Daman & Diu","number": "104"},
  {"loc": "Delhi","number": "+91-11-22307145"},
  {"loc": "Jammu and Kashmir","number": "+91-191-2520982,+91-194-2440283"},
  {"loc": "Ladakh","number": "+91-1982-256462"},
  {"loc": "Lakshadweep","number": "104"},
  {"loc": "Puducherry","number": "104"}]

  res.json(contacts)

   })
  
    
   router.get('/notification-advisory', (req,res) => {
  let notification = [
    {   "date":"-",
        "title": "PIB",
        "link": "https://pib.gov.in/newsite/pmreleases.aspx?mincode=31"
    },
    {   "date":"02.08.2020 ",
        "title": "Revised guidelines for International Arrivals",
        "link": "https://www.mohfw.gov.in/pdf/RevisedguidelinesforInternationalArrivals02082020.pdf"
    },
    {   "date":"24.05.2020 ",
        "title": "Guidelines for international arrivals",
        "link": "https://www.mohfw.gov.in/pdf/Guidelinesforinternationalarrivals.pdf"
    },
    {   "date":"24.05.2020 ",
        "title": "Guidelines for domestic travel (air/train/inter-state bus travel)",
        "link": "https://www.mohfw.gov.in/pdf/Guidelinesfordomestictravel(airortrainorinter-statebustravel).pdf"
    },
    {   "date":"20.03.2020 ",
        "title": "Instructions to all major and minor ports for dealing with(COVID-19)",
        "link": "https://www.mohfw.gov.in/pdf/DGSOrder04of2020.pdf"
    },
    {   "date":"19.03.2020 ",
        "title": "Additional Travel Advisory",
        "link": "https://www.mohfw.gov.in/pdf/Traveladvisory.pdf"
    },
    {   "date":"18.03.2020 ",
        "title": "Standard Operating Procedure for Passenger Movement post Disembarkation",
        "link": "https://www.mohfw.gov.in/pdf/SOPQuarantineofPassengers.pdf"
    },
    {   "date":"17.03.2020 ",
        "title": "Additional Travel Advisory",
        "link": "https://www.mohfw.gov.in/pdf/TravelAdvisory17thMarch.pdf"
    },
    {   "date":"16.03.2020",
        "title": " Additional Travel Advisory",
        "link": "https://www.mohfw.gov.in/pdf/TravelAdvisory16thMarch.pdf"
    },
    {   "date":"14.03.2020 ",
        "title": "Restrictions on International passenger traffic through Land Check Posts",
        "link": "https://www.mohfw.gov.in/pdf/NewinstructionsDt14032020Restirctiononinternationalpassengertraffic.pdf"
    },
    {   "date":"13.03.2020 ",
        "title": "Restrictions on International passenger traffic through land check posts-COVID 19",
        "link": "https://www.mohfw.gov.in/pdf/GuidelinesDT13032020.pdf"
    },
    {   "date":"11.03.2020 ",
        "title": "Consolidated Travel Advisory - 11 March 2020",
        "link": "https://www.mohfw.gov.in/pdf/ConsolidatedTraveladvisoryUpdated11032020.pdf"
    },
    {   "date":"11.03.2020 ",
        "title": "Visa restrictions issued by Bureau of Immigration (BOI) after meeting of GoM on COVID19 - 11 March 2020",
        "link": "https://www.mohfw.gov.in/pdf/VisarestrictionsrelatedtoCOVID19Ministries.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "11.03.2020 Decisions- High level Group of Ministers meeting to review current status and actions for prevention and management of COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/HFWnCoVGoM11March2020II.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "10.03.2020 Standard Operating Procedure (SOP) for COVID-19 Management- International Cruise Ships at major Indian Ports",
        "link": "https://www.mohfw.gov.in/pdf/InternationalCruiseShipsSOPforCovid19.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "10.03.2020 Additional Travel Advisory",
        "link": "https://www.mohfw.gov.in/pdf/AdditionalTravelAdvisory10032020.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "10.03.2020 Travel Advisory (Home Isolation)",
        "link": "https://www.mohfw.gov.in/pdf/AdditionalTravelAdvisory1homeisolation.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "06.03.2020 Travel Advisory",
        "link": "https://www.mohfw.gov.in/pdf/DraftTraveladvisorytotravelersUpdated06032020.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "05.03.2020 Travel Advisory",
        "link": "https://www.mohfw.gov.in/pdf/TravelAdvisory5thMarch.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "03.03.2020 Travel and Visa restrictions related to COVID-19 in respect of Bureau of Immigration",
        "link": "https://boi.gov.in/content/advisory-travel-and-visa-restrictions-related-covid-19"
    },
    {   "date":"12.05.2020 ",
        "title": "02.03.2020 Travel Advisory",
        "link": "https://www.mohfw.gov.in/pdf/Consolidated%20Travel%20advisory%20to%20travelers%20Updated%2002032020.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "26.02.2020 Travel Advisory",
        "link": "https://www.mohfw.gov.in/pdf/Consolidated%20Travel%20advisory%20to%20travelers%20Updated%2026-02-2020.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "05.02.2020 Travel Advisory",
        "link": "https://www.mohfw.gov.in/pdf/Traveladvisory05022020.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "25.01.2020 Travel Advisory",
        "link": "https://www.mohfw.gov.in/pdf/TraveladvisorytotravelersvisitingChina25012020.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "17.01.2020 Travel Advisory",
        "link": "https://www.mohfw.gov.in/pdf/TraveladvisorytotravelersvisitingChina17012020.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "01.04.2020 Taking care of mental health of children during COVID - 19",
        "link": "https://www.mohfw.gov.in/pdf/mentalhealthchildrean.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "01.04.2020 Taking care of mental health of elderly during COVID -19",
        "link": "https://www.mohfw.gov.in/pdf/mentalhealthelderly.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "01.04.2020 Psychosocial issues among migrants during COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/RevisedPsychosocialissuesofmigrantsCOVID19.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "31.03.2020 Minding our minds during the COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/MindingourmindsduringCoronaeditedat.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "17.07.2020 Advisory for Gated Residential Complexes with regards to COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/AdvisoryforRWAsonCOVID19.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "17.07.2020 Guidelines for Gated Residential Complexes Desirous of Setting Up Small Covid Care Facility by Resident Welfare Associations / Residential Societies / Non-Governmental Organizations (NGOs)",
        "link": "https://www.mohfw.gov.in/pdf/CovidCareFacilityinGatedcomplexes.pdf"
    },
    {  "date":"12.05.2020 ",
        "title": "13.07.2020 Fixation of rate for rt PCR Test for COVID-19 in respect of Central Services (Medical Attendance) beneficiaries",
        "link": "https://www.mohfw.gov.in/pdf/OMregfixationofCOVIDtestorCSMAbeneficiaries.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "04.06.2020 SOP on preventive measures in Restaurants to contain spread of COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/3SoPstobefollowedinRestaurants.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "18.05.2020 Guidelines on preventive measures to contain spread of COVID-19 in workplace settings",
        "link": "https://www.mohfw.gov.in/pdf/GuidelinesonpreventivemeasurestocontainspreadofCOVID19inworkplacesettings.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "18.05.2020 Revised Strategy for COVlD-19 testing in lndia",
        "link": "https://www.mohfw.gov.in/pdf/Revisedtestingguidelines.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "18.04.2020 EoI cum Bid Document for Procurement of Medical Oxygen Cylinder on urgent basis during COVID 19 situation",
        "link": "https://www.mohfw.gov.in/pdf/MedicalOxygenCylinder.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "05.04.2020 Guidelines for Quarantine facilities COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/90542653311584546120quartineguidelines.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "03.04.2020 Advisory & Manual on use of Homemade Protective Cover for Face & Mouth",
        "link": "https://www.mohfw.gov.in/pdf/Advisory&ManualonuseofHomemadeProtectiveCoverforFace&Mouth.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "03.04.2020 DO Letter of Secretary, Ministry of Human Resource Development for Arogya Setu App, and Light Candle at 09:00 PM on 5 April 2020 for 9 Minute.",
        "link": "https://www.mohfw.gov.in/pdf/DOSecyHRD.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "01.04.2020 Guidelines for Dialysis of COVID – 19 patients",
        "link": "https://www.mohfw.gov.in/pdf/GuidelinesforDialysisofCovid19Patients.pdf"
    },
    {    "date":"12.05.2020 ",
        "title": "29.03.2020 Health Advisory for Elderly Population of India during COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/AdvisoryforElderlyPopulation.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "29.03.2020 Guidelines on disinfection of common public places including offices",
        "link": "https://www.mohfw.gov.in/pdf/Guidelinesondisinfectionofcommonpublicplacesincludingoffices.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "27.03.2020 Office Memorandum-CGHS-Reimbursement of OPD Medicines Special Sanction in view of COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/OM27march2020.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "27.03.2020 Office Order-CGHS-Guidelines in view of the Corona Virus (COVID-19) Infection-issue of medicines",
        "link": "https://www.mohfw.gov.in/pdf/officeorder20032020.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "27.03.2020 Office Order-CGHS-Guidelines in View of COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/officeorder18032020.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "26.03.2020 Gazette Notification - Hydroxychloroquine now a schedule H1 drug, can be sold on prescription only",
        "link": "https://www.mohfw.gov.in/pdf/218927g.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "26.03.2020 Press Note on Pradhan Mantri Garib Kalyan Yojna package from Ministry of Finance",
        "link": "https://www.mohfw.gov.in/pdf/MoFPMGaribKalyanYojanaPackage.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "16.03.2020 Advisory - Social Distancing",
        "link": "https://www.mohfw.gov.in/pdf/SocialDistancingAdvisorybyMOHFW.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "15.03.2020 Guidelines on Dead Body Management",
        "link": "https://www.mohfw.gov.in/pdf/1584423700568_COVID19GuidelinesonDeadbodymanagement.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "11.03.2020 Guidelines for home quarantine",
        "link": "https://www.mohfw.gov.in/pdf/Guidelinesforhomequarantine.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "11.03.2020 Guidelines on use of masks by public",
        "link": "https://www.mohfw.gov.in/pdf/Useofmaskbypublic.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "05.03.2020 Advisory - Mass Gatherings",
        "link": "https://www.mohfw.gov.in/pdf/advisoryformassgathering.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "22.05.2020 Revised advisory on the use of Hydroxychloroquine (HCQ) as prophylaxis for COVID-19 infection",
        "link": "https://www.mohfw.gov.in/pdf/RevisedadvisoryontheuseofhydroxychloroquineasprophylaxisforSARSCOVID19infection.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "21.05.2020 Guidance note for Immunization services during and post COVID outbreak",
        "link": "https://www.mohfw.gov.in/pdf/3ImmunizationServicesduringCOVIDOutbreakSummary150520202.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "19.05.2020 Guidelines for Dental Professionals in Covid-19 situation",
        "link": "https://www.mohfw.gov.in/pdf/DentalAdvisoryF.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "18.05.2020 Revised Strategy for COVlD-19 testing in lndia",
        "link": "https://www.mohfw.gov.in/pdf/Revisedtestingguidelines.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "07.04.2020 Revised Guidelines for Dialysis of COVID – 19 patients",
        "link": "https://www.mohfw.gov.in/pdf/RevisedGuidelinesforDialysisofCOVID19Patients.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "05.04.2020 Guidelines for Quarantine facilities COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/90542653311584546120quartineguidelines.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "26-03-2020 Gazette Notification - Hydroxychloroquine now a schedule H1 drug, can be sold on prescription only",
        "link": "https://www.mohfw.gov.in/pdf/218927g.pdf"
    },
    {  "date":"12.05.2020 ",
        "title": "24-03-2020 Letter from Ministry of Consumer Affairs, Food & Public Distribution to States to take appropriate measures to ensure the availability of Ethyl Alcohol/Ethanol/ENA to the manufacturers of hand sanitizers in order to contain Corona Virus COVID- l9",
        "link": "https://www.mohfw.gov.in/pdf/ReviewofpricesofEssentialCommodities.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "20-03-2020 Advisory for Hospitals and Medical Institutions",
        "link": "https://www.mohfw.gov.in/pdf/AdvisoryforHospitalsandMedicalInstitutions.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "15-03-2020 SOP for Mock Drill on 22nd March 2020 for Hospital Preparedness",
        "link": "https://www.mohfw.gov.in/pdf/MockDrill.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "05.09.2020 Manual for Surveillance Teams for containment zones",
        "link": "https://www.mohfw.gov.in/pdf/ManualforSurveillanceTeamsforcontainmentzones.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "02.08.2020 Revised guidelines for International Arrivals",
        "link": "https://www.mohfw.gov.in/pdf/RevisedguidelinesforInternationalArrivals02082020.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "17.07.2020 Advisory for Gated Residential Complexes with regards to COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/AdvisoryforRWAsonCOVID19.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "17.07.2020 Guidelines for Gated Residential Complexes Desirous of Setting Up Small Covid Care Facility by Resident Welfare Associations / Residential Societies / Non-Governmental Organizations (NGOs)",
        "link": "https://www.mohfw.gov.in/pdf/CovidCareFacilityinGatedcomplexes.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "04.06.2020 SOP on preventive measures in Restaurants to contain spread of COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/3SoPstobefollowedinRestaurants.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "24.05.2020 Guidelines for international arrivals",
        "link": "https://www.mohfw.gov.in/pdf/Guidelinesforinternationalarrivals.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "24.05.2020 Guidelines for domestic travel (air/train/inter-state bus travel)",
        "link": "https://www.mohfw.gov.in/pdf/Guidelinesfordomestictravel(airortrainorinter-statebustravel).pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "22.05.2020 Revised advisory on the use of Hydroxychloroquine (HCQ) as prophylaxis for COVID-19 infection",
        "link": "https://www.mohfw.gov.in/pdf/RevisedadvisoryontheuseofhydroxychloroquineasprophylaxisforSARSCOVID19infection.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "21.05.2020 Guidance note for Immunization services during and post COVID outbreak",
        "link": "https://www.mohfw.gov.in/pdf/3ImmunizationServicesduringCOVIDOutbreakSummary150520202.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "18.05.2020 Guidelines on preventive measures to contain spread of COVID-19 in workplace settings",
        "link": "https://www.mohfw.gov.in/pdf/GuidelinesonpreventivemeasurestocontainspreadofCOVID19inworkplacesettings.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "18.05.2020 Revised Strategy for COVlD-19 testing in lndia",
        "link": "https://www.mohfw.gov.in/pdf/Revisedtestingguidelines.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "16.05.2020 Updated Cluster Containment Plan for COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/Containmentplan16052020.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "05.04.2020 Guidelines for Quarantine facilities COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/90542653311584546120quartineguidelines.pdf"
    }, 
    {   "date":"12.05.2020 ",
        "title": "03.04.2020 Request to States/UTs to provide support to ICMR Labs doing COVID-19 Testing",
        "link": "https://www.mohfw.gov.in/pdf/Covid19DOtoStatesSupportLabinrealtimeupdate.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "03.04.2020 DO Letter of Secretary, Ministry of Human Resource Development for Arogya Setu App, and Light Candle at 09:00 PM on 5 April 2020 for 9 Minute",
        "link": "https://www.mohfw.gov.in/pdf/DOSecyHRD.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "18.05.2020 Guidelines on preventive measures to contain spread of COVID-19 in workplace settings",
        "link": "https://www.mohfw.gov.in/pdf/GuidelinesonpreventivemeasurestocontainspreadofCOVID19inworkplacesettings.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "29-03-2020 Guidelines on disinfection of common public places including offices",
        "link": "https://www.mohfw.gov.in/pdf/Guidelinesondisinfectionofcommonpublicplacesincludingoffices.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "19-03-2020 DOPT OM - Preventive measures to contain the spread of COVID-19 in Training Institutes",
        "link": "https://www.mohfw.gov.in/pdf/InstructionsforTrainingInstitutes.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "18-03-2020 Directives from MoHRD for all Educational Institutions and Examination Boards regarding precautions to be taken in light of COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/DOSecyHE.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "18.03.2020 DoPT OM - Preventive measures to be taken to contain the spread of Novel Coronavirus (COVID-19)",
        "link": "https://www.mohfw.gov.in/pdf/PreventivemeasuresDOPT.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "18.03.2020 DO Letter from Secretary, DoHFW to State Chief Secretaries regarding Social Distancing Measures",
        "link": "https://www.mohfw.gov.in/pdf/Letterdated2032020toCSs.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "06.03.2020 Advisory for Exemption to mark biometric attendance in AEBAS",
        "link": "https://www.mohfw.gov.in/pdf/advisoryforbiometricattendance.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "12.06.2020 Guidelines for Hotels on preventive measures to contain spread of COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/HotelsGuidelines11thJune.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "1. &nbsp; What is Corona Virus and how does it transmits",
        "link": "https://www.mohfw.gov.in/pdf/CoronaVirus.pptx"
    },
    {   "date":"12.05.2020 ",
        "title": "2. &nbsp; Handwashing",
        "link": "https://www.mohfw.gov.in/pdf/Handwash.pptx"
    },
    {   "date":"12.05.2020 ",
        "title": "3. &nbsp; COVID Appropriate Behaviours",
        "link": "https://www.mohfw.gov.in/pdf/PreventiveMeasures.pptx"
    },
    {   "date":"12.05.2020 ",
        "title": "4. &nbsp; Home Quarantine",
        "link": "https://www.mohfw.gov.in/pdf/HomeQuarantine.pptx"
    },
    {   "date":"12.05.2020 ",
        "title": "5. &nbsp; Myth Busters",
        "link": "https://www.mohfw.gov.in/pdf/MythBusters.pptx"
    },
    {   "date":"12.05.2020 ",
        "title": "6. &nbsp; All India National Helpline 1075",
        "link": "https://www.mohfw.gov.in/pdf/1075.pptx"
    },
    {   "date":"12.05.2020 ",
        "title": "7. &nbsp; No Spitting",
        "link": "https://www.mohfw.gov.in/pdf/NoSpitting.pptx"
    },
    {   "date":"12.05.2020 ",
        "title": "8. &nbsp; Stigma and Discrimination",
        "link": "https://www.mohfw.gov.in/pdf/Stigma&Discrimination.pptx"
    },
    {   "date":"12.05.2020 ",
        "title": "9. &nbsp; Thank you COVID Warriors",
        "link": "https://www.mohfw.gov.in/pdf/ThankYouCOVIDWarriors.pptx"
    },
    {   "date":"12.05.2020 ",
        "title": "31.03.2020 Handling Public Grievances pertaining to COVID-19 in M/o Health & Family Welfare",
        "link": "https://www.mohfw.gov.in/pdf/MoHFWCOVIDNODALOFFICER.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "29.03.2020 Poster on Social distancing in a market place during COVID-19 English",
        "link": "https://www.mohfw.gov.in/pdf/socialdistancingEnglish.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "29.03.2020 Poster on Social distancing in a market place during COVID-19 Hindi",
        "link": "https://www.mohfw.gov.in/pdf/socialdistancingHindi.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "1. &nbsp; A letter from HFM to the Health Administrators",
        "link": "https://www.mohfw.gov.in/pdf/HFMLettergeneralawarness.pdf"
    },  
    {   "date":"12.05.2020 ",
        "title": "2. &nbsp;Community leaflet",
        "link": "https://www.mohfw.gov.in/pdf/LeafletGHFandDHGA.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "3.&nbsp; What is Novel Coronavirus?",
        "link": "https://www.mohfw.gov.in/pdf/Poster1GHFanDHGA.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "4.&nbsp;Is your Healthcare facility ready to manage patients with COVID-19?",
        "link": "https://www.mohfw.gov.in/pdf/Poster2GHFGA.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "5.&nbsp;How to use the handrub?",
        "link": "https://www.mohfw.gov.in/pdf/Poster3GHFGA.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "6.&nbsp;When and How to wear mask?",
        "link": "https://www.mohfw.gov.in/pdf/Poster4GHFGA.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "7.&nbsp;Guidelines on the use of materials",
        "link": "https://www.mohfw.gov.in/pdf/GuidelinebookGA1mb.pdf"
    },
    {  "date":"12.05.2020 ",
        "title": "1. &nbsp; A letter from HFM to the Health Administrators",
        "link": "https://www.mohfw.gov.in/pdf/HFMLetter.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "2. &nbsp;Community leaflet",
        "link": "https://www.mohfw.gov.in/pdf/LeafletGHFandDH.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "3.&nbsp; What is Novel Coronavirus?",
        "link": "https://www.mohfw.gov.in/pdf/Poster1GHFandDH.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "4.&nbsp;Is your Healthcare facility ready to manage patients with COVID-19?",
        "link": "https://www.mohfw.gov.in/pdf/Poster2.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "5.&nbsp;How to protect all health workers at designated hospital?",
        "link": "https://www.mohfw.gov.in/pdf/Poster3.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "6.&nbsp;What are my moments of hand hygiene?",
        "link": "https://www.mohfw.gov.in/pdf/Poster4.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "7.&nbsp;How to manage Suspected or confirmed COVID-19 patients at designated hospital?",
        "link": "https://www.mohfw.gov.in/pdf/Poster5DH.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "8.&nbsp;Guidelines on the use of materials",
        "link": "https://www.mohfw.gov.in/pdf/Guidelinebook1mb.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "1. &nbsp;Facilitator Guide",
        "link": "https://www.mohfw.gov.in/pdf/FacilitatorGuideCOVID19_27 March.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "2. &nbsp;PPT with seven sessions including for Urban",
        "link": "https://www.mohfw.gov.in/pdf/2COVID19PPT_25MarchPPTWithAnimation.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "3.&nbsp; A digital pocket book for front line workers",
        "link": "https://www.mohfw.gov.in/pdf/3Pocketbookof5_Covid19_27March.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "4.&nbsp;Training Protocols and guidelines",
        "link": "https://www.mohfw.gov.in/pdf/4FLWToolkitHowtousethetoolkit.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "5.&nbsp;Training Plan template",
        "link": "https://www.mohfw.gov.in/pdf/5COVIDFLWTrainingPlan27March.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "28.03.2020 When to get tested for COVID-19 English",
        "link": "https://www.mohfw.gov.in/pdf/FINAL_14_03_2020_ENg.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "28.03.2020 When to get tested for COVID-19 Hindi",
        "link": "https://www.mohfw.gov.in/pdf/FINAL_14_03_2020_Hindi.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "25.03.2020 Role of Frontline Workers in Prevention and Management of CORONA VIRUS- English",
        "link": "https://www.mohfw.gov.in/pdf/PreventionandManagementofCOVID19FLWEnglish.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "25.03.2020 Role of Frontline Workers in Prevention and Management of CORONA VIRUS - Hindi",
        "link": "https://www.mohfw.gov.in/pdf/PreventionandManagementofCOVID19FLWHindi.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "23.03.2020 Posters for Safety measures against COVID-19 - English",
        "link": "https://www.mohfw.gov.in/pdf/ProtectivemeasuresEng.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "23.03.2020 Posters for Safety measures against COVID-19 - Hindi",
        "link": "https://www.mohfw.gov.in/pdf/ProtectivemeasuresHin.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "22.03.2020 KIDS, VAAYU & CORONA : Comic book for children to provide correct information about COVID-19 - Part 2",
        "link": "https://www.mohfw.gov.in/pdf/CoronaComic2PGIPU22Mar20.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "19.03.2020 Posters for Indians traveling from abroad - English",
        "link": "https://www.mohfw.gov.in/pdf/PostrerEnglishtraveller.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "19.03.2020 Posters for Indians traveling from abroad - Hindi",
        "link": "https://www.mohfw.gov.in/pdf/PosterTravellerHindi.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "17.03.2020 When to wear mask?: English",
        "link": "https://www.mohfw.gov.in/pdf/Mask-Eng.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "17.03.2020 When to wear mask?: Hindi",
        "link": "https://www.mohfw.gov.in/pdf/Mask-Hindi.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "09.03.2020 KIDS, VAAYU & CORONA : Comic book for children to provide correct information about COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/Corona_comic_PGI.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "06.03.2020 Do's and Don't Poster in English",
        "link": "https://www.mohfw.gov.in/pdf/Poster_Corona_ad_Eng.pdf"
    },
    {   "date":"12.05.2020 ",
        "title": "06.03.2020 Do's and Don't Poster in Hindi",
        "link": "https://www.mohfw.gov.in/pdf/Poster_Corona_ad_Hin.pdf"
    },
    {    "date":"12.05.2020 ",
        "title": "Poster for Felicitating our Nurses and Midwives on International Nurses day 2020",
        "link": "https://www.mohfw.gov.in/pdf/PosterInternationalNurseDay2020.pdf"
    }
]
    res.json(notification)
   })


  router.get("/physics",(req, res) =>{
     let que;
     setquestion.find({id:"Physics"}, (error, que) =>{
     // console.log(que);
      //var obj = JSON.parse('que');
      res.send(que); 
     });
    // console.log(que);
        
  });
  router.get("/chemistry",(req, res) =>{
    let que;
    setquestion.find({id:"Chemistry"}, (error, que) =>{
    // console.log(que);
     //var obj = JSON.parse('que');
     res.send(que); 
    });
   // console.log(que);
       
 });
 router.get("/Math",(req, res) =>{
  let que;
  setquestion.find({id:"Math"}, (error, que) =>{
  // console.log(que);
   //var obj = JSON.parse('que');
   res.send(que); 
  });
 // console.log(que);
     
});
module.exports = router;
