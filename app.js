const express = require('express');
const app = express();

const data = require('./data');
const physicians = data.physicians;
const users = data.users;
const patients = data.patients;
const patientTypes = data.patientTypes;
const appointments = data.appointments;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/physicians', (req, res) => {
  res.json({ physicians });
});

app.get('/physicians/:uid/appointments', (req, res) => {
  const physicianId = req.params.uid;

  // If I had more time, I would have created database and used joins
  //
  // select * from appointments
  // left join patients on appointments.patient_id = patients.id
  // left join patientTypes on appointments.patient_id = patients.id
  // left join physicians on patients.physician_id = physicians.id
  // left join users on patients.user_id = users.id
  // where physicians.id = physiciansId

  const allAppointments = [];
  for (const appointment of appointments) {
    const patient = patients.filter((p) => {
      return p.id === appointment.patient_id;
    })[0];

    const patientType = patientTypes.filter((t) => {
      return t.id === patient.patient_type_id;
    })[0];

    const physician = physicians.filter((p) => {
      return p.id === patient.physician_id;
    })[0];

    const user = users.filter((u) => {
      return u.id === patient.user_id;
    })[0];

    allAppointments.push({
      id: appointment.id,
      name: user.first_name + ' ' + user.last_name,
      time: appointment.time,
      kind: patientType.title,
      physician_id: physician.id,
    })
  }

  const physicianAppointments = allAppointments.filter((a) => {
    return a.physician_id === physicianId;
  })

  res.json({ appointments: physicianAppointments });
});

app.listen(4567, () => console.log('App listening on port 4567!'))
