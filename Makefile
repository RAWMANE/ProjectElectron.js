APP_NAME=projectElectron.js

install:
	@echo "Installing dependencies..."
	npm install

start:
	@echo "Starting the Electron app..."
	npm start

lint:
	@echo "Running ESLint..."
	npm run lint

lint-fix:
	@echo "Running ESLint with --fix..."
	npm run lint-fix

clean:
	@echo "Cleaning up node_modules..."
	rm -rf node_modules

reinstall: clean install

help:
	@echo "Usage:"
	@echo "  make install      Install all dependencies"
	@echo "  make start        Start the Electron app"
	@echo "  make lint         Run ESLint for code quality check"
	@echo "  make lint-fix     Fix ESLint issues automatically"
	@echo "  make clean        Remove node_modules"
	@echo "  make reinstall    Reinstall all dependencies"
	@echo "  make help         Show this help message"