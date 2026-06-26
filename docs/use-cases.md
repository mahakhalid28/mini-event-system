# Actors
## Super Admin ( manage everything)
 Creates organizations
 Manages the whole system
 Views analytics
  Manages organization admins

## Organization Admin (Manage organization)
 Creates events
 Manages employees
 Views organization dashboard
 Manages wallet
## Employee
- Login
- View events
- Reserve seats
- Cancel reservation
- View tickets

---

## Notification Service
- Sends confirmation emails
- Sends cancellation emails
## Identify Major Use Cases
# Use Cases

Authentication

- Register
- Login
- Logout
- Forgot Password

Organization

- Create Organization
- Update Organization
- Delete Organization

User Management

- Create Employee
- Update Employee
- Assign Role
- Deactivate Employee

Event

- Create Event
- Edit Event
- Delete Event
- Search Event
- View Event Details

Reservation

- Reserve Seat
- Cancel Reservation
- View Reservation

Wallet

- Add Credits
- View Wallet
- Deduct Credits

Notifications

- Send Reservation Email
- Send Cancellation Email

Dashboard

- View Revenue
- View Total Events
- View Reservations
## Detailed Usecases
## Use Case: Reserve Seat
# Use Case: Reserve Seat

Actor:
Employee

Description:
Employee reserves a seat for an event.

Preconditions:
- Employee is logged in.
- Event exists.
- Seats are available.
- Organization wallet has sufficient balance.

Main Flow:

1. Employee opens event page.
2. Employee clicks Reserve.
3. System validates availability.
4. System deducts wallet credits.
5. System creates reservation.
6. System generates ticket.
7. System sends confirmation email.

Post Conditions:

- Reservation saved.
- Ticket generated.
- Wallet updated.
- Email sent.
## Create Event UseCase
# Use Case: Create Event

Actor:
Organization Admin

Description:
Admin creates a new event.

Preconditions:
- Admin is logged in.

Flow:

1. Click Create Event.
2. Fill event details.
3. Validate form.
4. Save event.
5. Show success message.

Post Conditions:
- Event stored in database.