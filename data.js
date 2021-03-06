const physicians = [
  {
    id: 'fd0ff6a0-030a-41be-a706-480861e56e04',
    first_name: 'Julius',
    last_name: 'Hibbert',
    email: 'hibbert@notablehealth.com',
  },
  {
    id: '52b7eed4-a42c-4da6-8ced-d8ec2dc9faf8',
    first_name: 'Algernop',
    last_name: 'Krieger',
    email: 'krieger@notablehealth.com',
  },
  {
    id: '83c103eb-d7aa-48e5-a51c-8dc786f3c52b',
    first_name: 'Nick',
    last_name: 'Riviera',
    email: 'riviera@notablehealth.com',
  },
];

const users = [
  {
    id: '9f31c8bd-5fea-45b8-a477-f9dd9a701eba',
    first_name: 'Sterling',
    last_name: 'Archer',
  },
  {
    id: 'a943adce-6e2d-45c9-95a9-e5e20a23d275',
    first_name: 'Cyril',
    last_name: 'Figis',
  },
  {
    id: '28bbbfe5-0bfc-444b-930c-f36e1003a2c7',
    first_name: 'Ray',
    last_name: 'Gilette',
  },
  {
    id: '43214ebc-509e-4e33-8908-b179207efe3c',
    first_name: 'Lana',
    last_name: 'Kane',
  },
  {
    id: '05b241dd-81a0-4d10-9d4f-e1a9a9054978',
    first_name: 'Pam',
    last_name: 'Poovey',
  },
  {
    id: '4986f559-06be-47dc-a129-7b89a407844e',
    first_name: 'Kobe',
    last_name: 'Bryant',
  },
  {
    id: '3338c324-61ea-48e4-b11f-b4d5ecd30f1a',
    first_name: 'Lebron',
    last_name: 'James',
  },
  {
    id: 'b0124a72-8956-4516-9c30-28269a82c16e',
    first_name: 'Paul',
    last_name: 'George',
  },
]

const patients = [
  {
    id: '5cbaeb42-c70f-4342-8c22-e7d377ea94c6',
    user_id: '9f31c8bd-5fea-45b8-a477-f9dd9a701eba',
    physician_id: '52b7eed4-a42c-4da6-8ced-d8ec2dc9faf8',
    patient_type_id: 'c98dfce3-541b-4ab6-a96c-4937f1df411b' ,
  },
  {
    id: '2af5382d-92c0-4eb1-855e-c97c174fa2ee',
    user_id: 'a943adce-6e2d-45c9-95a9-e5e20a23d275',
    physician_id: '52b7eed4-a42c-4da6-8ced-d8ec2dc9faf8',
    patient_type_id: '598f20a5-529f-48fa-919c-9af8d0a064dd' ,
  },
  {
    id: '77a752e2-64ae-4b0b-98b1-8205775d9565',
    user_id: '28bbbfe5-0bfc-444b-930c-f36e1003a2c7',
    physician_id: '52b7eed4-a42c-4da6-8ced-d8ec2dc9faf8',
    patient_type_id: '598f20a5-529f-48fa-919c-9af8d0a064dd' ,
  },
  {
    id: '25d70406-3db4-49f4-a046-ed434e393cee',
    user_id: '43214ebc-509e-4e33-8908-b179207efe3c',
    physician_id: '52b7eed4-a42c-4da6-8ced-d8ec2dc9faf8',
    patient_type_id: 'c98dfce3-541b-4ab6-a96c-4937f1df411b' ,
  },
  {
    id: 'fdb41685-d460-437d-bb10-510b9acebd13',
    user_id: '05b241dd-81a0-4d10-9d4f-e1a9a9054978',
    physician_id: '52b7eed4-a42c-4da6-8ced-d8ec2dc9faf8',
    patient_type_id: 'c98dfce3-541b-4ab6-a96c-4937f1df411b' ,
  },
  {
    id: '6daaa01b-49f1-43c6-82a1-f949188dfae6',
    user_id: '4986f559-06be-47dc-a129-7b89a407844e',
    physician_id: 'fd0ff6a0-030a-41be-a706-480861e56e04',
    patient_type_id: 'c98dfce3-541b-4ab6-a96c-4937f1df411b' ,
  },
  {
    id: 'd59090d0-9483-4060-949c-4a7c2cf6ae58',
    user_id: '3338c324-61ea-48e4-b11f-b4d5ecd30f1a',
    physician_id: 'fd0ff6a0-030a-41be-a706-480861e56e04',
    patient_type_id: 'c98dfce3-541b-4ab6-a96c-4937f1df411b' ,
  },
  {
    id: 'ca2e4558-e72b-4f0c-a373-2c8162eefa49',
    user_id: 'b0124a72-8956-4516-9c30-28269a82c16e',
    physician_id: '83c103eb-d7aa-48e5-a51c-8dc786f3c52b',
    patient_type_id: 'c98dfce3-541b-4ab6-a96c-4937f1df411b' ,
  },
];

const patientTypes = [
  {
    id: 'c98dfce3-541b-4ab6-a96c-4937f1df411b',
    title: 'New Patient',
  },
  {
    id: '598f20a5-529f-48fa-919c-9af8d0a064dd',
    title: 'Follow-up',
  },
];

const appointments = [
  {
    id: '9e0ecb48-ba8e-459d-8fee-5accdb3c66ac',
    patient_id: '6daaa01b-49f1-43c6-82a1-f949188dfae6',
    time: '8:00AM',
  },
  {
    id: '5cffc68c-fce9-4943-9602-6dc942f5d99f',
    patient_id: 'd59090d0-9483-4060-949c-4a7c2cf6ae58',
    time: '8:00AM',
  },
  {
    id: '00823198-a55a-4f19-89db-3a27e6a05882',
    patient_id: 'ca2e4558-e72b-4f0c-a373-2c8162eefa49',
    time: '8:00AM',
  },
  {
    id: '7d848637-4b12-4951-bcae-682784cf568c',
    patient_id: '5cbaeb42-c70f-4342-8c22-e7d377ea94c6',
    time: '8:00AM',
  },
  {
    id: '624f2618-7b2c-4021-b8f4-3b25ce276dce',
    patient_id: '2af5382d-92c0-4eb1-855e-c97c174fa2ee',
    time: '8:30AM',
  },
  {
    id: 'eb0740f6-4996-4b14-a76f-3a0570b2da8a',
    patient_id: '77a752e2-64ae-4b0b-98b1-8205775d9565',
    time: '9:00AM',
  },
  {
    id: '535ba693-87f9-44bd-ac55-b8f199d62e40',
    patient_id: '25d70406-3db4-49f4-a046-ed434e393cee',
    time: '9:30AM',
  },
  {
    id: '9a3724be-c10c-4ae4-986b-bcaaa1b34ad6',
    patient_id: 'fdb41685-d460-437d-bb10-510b9acebd13',
    time: '10:00AM',
  },
];

module.exports = {
  physicians,
  patients,
  patientTypes,
  appointments,
  users,
};
