import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};


// // Import Clerk middleware
// import { clerkMiddleware } from "@clerk/nextjs/server";

// // Apply the middleware
// export default clerkMiddleware();

// // Define the routes where the middleware should run
// export const config = {
//   matcher: [
//     "/(api|trpc)(.*)", // Apply middleware for all API routes
//     "/protected/(.*)", // Example of a protected route folder
//     "/", // Apply to the root route (if necessary)
//   ],
// };


// ////////////////////
