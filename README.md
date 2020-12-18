# MoneyTransfer


## App URL

https://money-trf.herokuapp.com/
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma]


## Project structure

├── shared                      # Shared components, services, and validators\
├    ├── confirm-modal          # Modal component for confirming transaction\
├    ├── model                  # DTO\
├    └── validators             # Ammount validator\
├── transactions-form           # Transaction form component\
├── transaction-list            # Transaction list components\
├    ├── list-item              # Single item from transaction list\
├    └── search-sort-bar        # Search - sort controls\
└──  translate                  # Translate loader\
     └── translations           # Translation files .json\
