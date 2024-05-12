import * as Yup from "yup";

export const vali=Yup.object({
    PolicyNo:Yup.string().min(8).max(10).required('value must of alteast 8 upto 10 letters'),
    Age:Yup.number().required('Number format').positive('Age must be a positive number').integer('Age must be an integer').min(14, 'You must be at least 14 years old').max(120, 'Age must be less than or equal to 120'), // Adjust the maximum age as needed
    PoliceReport:Yup.string().min(2).max(3),
    Summary:Yup.string().min(30).required('atleast 30 char'),
    TypeOfVehicle:Yup.string().required('select type of car'),
    Make:Yup.string().min(2).max(15).required('Please provide Mfg in 2 upto 15 letters'),
    Base:Yup.string().min(2).max(12).required('Please Choose Base value'),
    AreaType:Yup.string().required("Please provide area of accident"),
    Gender:Yup.string().required("Please select Gender"),
})