# Oddly Mobile Web App Prototype

## Purpose

This is a browser-based interactive MVP prototype for the Oddly product. It is designed to validate workflows before native iPhone and Android development.

## Run

Open `index.html` directly in a browser. No build tools or dependencies are required.

## Included Workflows

- Sign into separate Oddly Crew, Parent, and Neighbour demo accounts.
- Preview a separate private Oddly Admin operations account.
- Lock each signed-in account to its assigned role and workspace.
- Browse and inspect local jobs.
- Crew job applications.
- Parent job approval and decline flows.
- Neighbour job-posting prototype.
- Role-specific dashboards, activity, and profile views.
- English and Swedish interface switching.
- Local browser persistence for prototype state.

## Access Control

The prototype now treats account role as immutable for the signed-in session. A Crew
account cannot open parent or neighbour screens, and changing demo accounts requires
signing out first.

The browser interface is only a workflow demonstration. Production access control must
be enforced by the backend API on every request. Never trust a role supplied by the app.
The authenticated user ID should be resolved to a server-owned role and permissions.

## Admin Portal

The production admin dashboard should be a separate secure web portal, recommended at
`admin.oddly.work`. It should not ship inside the Crew, Parent, or Neighbour mobile apps.
The shared prototype includes an Admin demo account only to make review convenient.

Admin access should require multi-factor authentication, granular staff permissions,
market-level access controls, and immutable audit logs. Financial dashboards must
distinguish gross job value earned through Oddly from Oddly fees and company revenue.

## Important Email Routing

All support, administration, directory, and operational email references must route to:

`info@oddly.work`

The prototype centralizes this in `app.js`:

```js
const SUPPORT_EMAIL = "info@oddly.work";
```

The future backend should use the same address for:

- Support requests
- Admin alerts
- Directory enquiries
- Job moderation alerts
- Parent safety escalations
- Failed notification delivery

## Production Architecture Recommendation

- Frontend: React Native or Flutter for iPhone and Android, reusing these flows.
- Web frontend: React/Next.js or equivalent.
- Backend: API with role-based authorization.
- Database: PostgreSQL.
- Authentication: email/phone plus parent-child linking.
- File storage: secure completion-photo storage.
- Notifications: push notifications plus transactional email.
- Email sender/reply-to: `info@oddly.work`.
- Payments, identity checks, and live location require dedicated compliant providers.

## Core Entities

- `User`
- `CrewProfile`
- `ParentProfile`
- `NeighbourProfile`
- `ParentCrewLink`
- `Job`
- `JobApplication`
- `ParentApproval`
- `JobCheckIn`
- `CompletionEvidence`
- `Payment`
- `Feedback`
- `XpEvent`
- `Badge`
- `Notification`

See `data-model.json` for a suggested starting shape.
