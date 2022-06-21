const mongoose = require('mongoose');
const express = require('express');
const mongodb = config.get('mongoURI');

const connection = async () => {
  try {
    await mongoose.connect(mongodb);
  } catch(err) {
    console.error(err);
    process.exit(1);
  }
};
