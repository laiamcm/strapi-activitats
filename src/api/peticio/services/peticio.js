'use strict';

/**
 * peticio service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::peticio.peticio');
