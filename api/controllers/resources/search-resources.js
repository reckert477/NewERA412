module.exports = {


  friendlyName: 'Search Resources',


  description: 'Display list of resources fulfilling search criteria.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/welcome',
      description: 'Display the welcome page for authenticated users.'
    },

  },


  fn: async function () {

    return {};

  }


};
