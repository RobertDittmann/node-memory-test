'use strict';

const testService = require('../services/tested_service');
const grpcMapper = require('../grpc/grpc_mapper');

async function test(req, res) {
    try {
        const data = await testService.getData(req.params);
        const grpcData = grpcMapper.convertToGrpcData(data);
        res.status(200).json(grpcData);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
}

module.exports = {
    test: test,
};
