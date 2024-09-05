import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://n4n_user:krfmtFY76OOcwJHWV25RTtBTB1K7kPK4@dpg-cr7qs30gph6c73en7ba0-a.oregon-postgres.render.com/n4n';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;