interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: boolean): boolean;
}

const driver: Driver = {
  database: '',
  password: '',
  port: 23,

  connect(): void {
    // code
  },

  disconnect(): void {
    // code
  },

  isConnected(name: boolean): boolean {
    return name;
  }
}

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    // code
  }

  disconnect(): void {
    // code
  }

  isConnected(name: boolean): boolean {
    return name;
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    // code
  }

  disconnect(): void {
    // code
  }

  isConnected(name: boolean): boolean {
    return name;
  }
}