import express from 'express';
const router = express.Router();

import employees from './dummyEmployees.json';
import departments from './dummyDepartments.json';

function getNextId(list){
    var arr = list.map(x => x.id);
    var max = Math.max(...arr);
    return max + 1;
}

router.route('/department/')
    .get((req, res) => {
        res.send(departments.filter(x => x.id > 0));
    })
    .post((req, res) => {
        console.log('post departmentId', 0, data);
        const data = req.body; // JSON.parse(req.body);
        data.id = getNextId(departments);
        console.log(data);
        departments.push(data.data);
        res.status(200).send(data);
    });

router.route('/department/:departmentId')
    .get((req, res) => {      
        const id = parseInt(req.params.departmentId);
        const idx = departments.findIndex((department) => department.id === id);
        console.log('get departmentId', id, idx);
        res.send(departments[idx]);
    })    
    .put((req, res) => { 
        const id = parseInt(req.params.departmentId);
        const data = req.body; // JSON.parse(req.body);
        const idx = departments.findIndex((department) => department.id === id);
        console.log('put departmentId', id, idx, data);
        departments[idx] = data.data;
        res.status(200).send(data);
    })
    .delete((req, res) => {
        const id = parseInt(req.params.departmentId);
        const idx = departments.findIndex((department) => department.id === id);
        console.log('delete departmentId', id, idx);
        departments.splice(idx, 1);
        res.status(200).send();
    });

router.route('/employee/')
    .get((req, res) => {
        res.send(employees.filter(x => x.id > 0));
    })
    .post((req, res) => {
        const data = req.body;
        data.id = getNextId(employees);
        console.log('post employeeId', 0, data);
        employees.push(data.data);
        res.status(200).send(data);
    });
router.route('/employee/:employeeId')
    .get((req, res) => {      
        const id = parseInt(req.params.employeeId);
        const idx = employees.findIndex((employee) => employee.id === id);
        console.log('get employeeId', id, idx);
        res.send(employees[idx]);
    })    
    .put((req, res) => { 
        const id = parseInt(req.params.employeeId);
        const data = req.body;       
        const idx = employees.findIndex((employee) => employee.id === id); 
        console.log('put employeeId', id, idx, data, employees[idx]);
        employees[idx] = data.data;
        res.status(200).send(data.data);
    })
    .delete((req, res) => {
        const id = parseInt(req.params.employeeId);
        const idx = employees.findIndex((employee) => employee.id === id);
        console.log('delete employeeId', id, idx);
        employees.splice(idx, 1);
        res.status(200).send();
    });

export default router;