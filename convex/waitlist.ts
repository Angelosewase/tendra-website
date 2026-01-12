import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const addToWaitlist = mutation({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if email already exists
    const existing = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();
    
    if (existing) {
      throw new Error("Email already registered for waitlist");
    }

    // Add new email to waitlist
    const waitlistId = await ctx.db.insert("waitlist", {
      email: args.email,
      createdAt: Date.now(),
    });

    return waitlistId;
  },
});

export const getWaitlistEmails = query({
  handler: async (ctx) => {
    const waitlist = await ctx.db.query("waitlist").order("desc").collect();
    return waitlist;
  },
});

export const getWaitlistCount = query({
  handler: async (ctx) => {
    const waitlist = await ctx.db.query("waitlist").collect();
    return waitlist.length;
  },
});