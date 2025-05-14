// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

// Create a connection pool to the database
const pool = new Pool