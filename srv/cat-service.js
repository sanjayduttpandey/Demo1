const cds = require("@sap/cds");

module.exports = cds.service.impl(async function () {
    const bupa = await cds.connect.to('API_BUSINESS_PARTNER');
    const BusinessPartners = this.entities;

     this.on('READ', 'BusinessPartner', async req => {
    //read from Mock data
    //     return bupa.run(req.query);
    // });
    req.query.where("LastName <> '' and FirstName <> '' ");

    return await bupa.transaction(req).send({
      query: req.query,
      headers: {
        apikey: 'rRAQZaDvG4uGn4mDFW2uAG8eW0FyVF1v',//process.env.apikey,
      }
    });
    });
});