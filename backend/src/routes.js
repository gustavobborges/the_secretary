const express = require('express');
const cors = require("cors");
const app = express();
const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    app.use(cors());
    next();
});

app.get("/", (req, res) => {
    res.send("Acesso a rota padrão da aplicação.");
    res.json({ message: "Acesso a rota padrão da aplicação." })
});

router.route("/appointments")
    .get(function (req, res) {
        Appointment.find({}, function (error, appointments) {
            if (error) res.send(error);
            res.json(appointments);
        })
    })
    .post(function (req, res) {
        var appointment = new Appointment();
        appointment.name = req.body.name;
        appointment.description = req.body.description;
        appointment.place = req.body.place;
        appointment.date = req.body.date;
        appointment.time = req.body.time;

        appointment.save(function (error) {
            if (error) res.send(error);
            res.json({ message: "Agendado com sucesso!" })
        });
    });

router.route("/appointments/:id")
.get(function (req, res) {
    Appointment.findById(req.params.id, function (error, appointment) {
        if (error) res.send(error);
        res.json(appointment);
    })
})
.delete(function (req, res) {
    Appointment.remove(
        {
            _id: req.params.id
        },
        function (error) {
            if (error) res.send(error);
            res.json({ message: "Usuário excluído com sucesso!" });
        }
    )
})
.put(function (req, res) {
    Appointment.findById(req.params.id, function (error, appointment) {
        if (error) res.send(error);
        appointment.name = req.body.name;
        appointment.description = req.body.description;
        appointment.place = req.body.place;
        appointment.date = req.body.date;
        appointment.time = req.body.time;
        appointment.save(function (error) {
            if (error) res.send(error);
            res.json({ message: "Compromisso atualizado com sucesso!" })
        })
    })
});

module.exports = router;