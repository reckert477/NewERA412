/**
 * Resource.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    name: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s first name.',
      maxLength: 120,
      example: 'Abcde'
    },
    startDate: {
      type: 'date'
    },
    endDate: {
      type: 'date'
    },
    phone: {
      type: 'string',
      required: true,
      description: 'User\'s phone number, with non-digits stripped away',
      maxLength: 10,
      example: '6501211121'
    },
    emailAddress: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
      example: 'mary.sue@example.com'
    },
    imageURL: {
      type: 'string',
      required: true,
      description: 'Resources\'s profile image link',
      maxLength: 300,
      example: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&https://media1.s-nbcnews.com/j/newscms/2019_12/2791086/190319-joe-biden-mn-0815_25373d8850cee764e502c5cfbb5717c7.fit-2000w.jpg=8&ved=2ahUKEwih2tzS85PhAhVsT98KHVfbDLAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.nbcnews.com%2Fpolitics%2Fmeet-the-press%2Fjoe-biden-unlikely-win-2020-doing-things-old-fashioned-way-n984751&psig=AOvVaw1wSc7iqTNWvWFntTOx0AjM&ust=1553280694530808'
    },
    description: {
      type: 'string',
      required: true,
      maxLength: 1000
    },
    externalURL: {
      type: 'string',
      required: true,
      description: 'Resources\'s website link',
      maxLength: 300,
      example: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&https://media1.s-nbcnews.com/j/newscms/2019_12/2791086/190319-joe-biden-mn-0815_25373d8850cee764e502c5cfbb5717c7.fit-2000w.jpg=8&ved=2ahUKEwih2tzS85PhAhVsT98KHVfbDLAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.nbcnews.com%2Fpolitics%2Fmeet-the-press%2Fjoe-biden-unlikely-win-2020-doing-things-old-fashioned-way-n984751&psig=AOvVaw1wSc7iqTNWvWFntTOx0AjM&ust=1553280694530808'
    },
    tags: {
      type: 'json',
    },
    flags: {
      type: 'json',
    }

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

