const isDevMode = process.env.NODE_ENV === 'development';

interface ILogger {
    log: (value?: string) => void;
}

class ConsoleLogger implements ILogger {
    public log(value?: string) {
        if (value) console.log(value);
    }
}

class NullLogger implements ILogger {
    public log(value?: string) { }
}

export const Logger = isDevMode ? new ConsoleLogger() : new NullLogger();