# How to Add New Service Pages - Step by Step Guide

## Overview
All service pages are **dynamic** and managed from a **single file**: `lib/services.ts`

When you add a new service to `lib/services.ts`, it automatically becomes available at:
- URL: `/services/your-slug-name`
- Links from Home2 cards and Header menu (if mapped)

---

## Step-by-Step: Adding a New Service

### Step 1: Add the Slug to the Type
In `lib/services.ts`, find this line:
```typescript
export type ServiceSlug =
  | "project-loan"
  | "machinery-loan";
```

Add your new slug:
```typescript
export type ServiceSlug =
  | "project-loan"
  | "machinery-loan"
  | "working-capital-loan";  // ← Add your new slug here
```

### Step 2: Add Service Content
In the `servicesContent` object, add your service following this template:

```typescript
"working-capital-loan": {  // ← Use the same slug as in Step 1
  slug: "working-capital-loan",
  name: "Working Capital Loan",  // Short display name
  category: "Loans",  // Category: "Loans", "Registration", "Subsidy", "Tax", "Audit", "IPO"
  title: "Working Capital Loan Consultant Services in Ahmedabad",
  intro: "Your introduction paragraph here...\nCan be multiple lines.\nUse \\n for line breaks.",
  
  whyNeed: {
    title: "Why You Need This Service?",
    points: [
      "Point 1",
      "Point 2",
      "Point 3",
    ],
    description: "Optional description after the points",  // Optional
  },
  
  services: {
    title: "Our Services",
    description: "Optional description before the service items",  // Optional
    items: [
      {
        subtitle: "Service Item 1",
        note: "Optional note like 'We provide:' or 'A banker-friendly DPR covering:'",  // Optional
        details: [
          "Detail 1",
          "Detail 2",
        ],
      },
      {
        subtitle: "Service Item 2",
        details: [
          "Detail 1",
          "Detail 2",
        ],
      },
    ],
  },
  
  whoCanApply: [  // Optional - remove if not needed
    "Who can apply 1",
    "Who can apply 2",
  ],
  whoCanApplyDescription: "Optional description after whoCanApply list",  // Optional
  
  whyChooseUs: [
    "✔ Reason 1",
    "✔ Reason 2",
  ],
  whyChooseUsDescription: "Optional description before whyChooseUs list",  // Optional
  
  documentsRequired: [  // Optional - only for services that need this
    "Document 1",
    "Document 2",
  ],
  documentsRequiredNote: "Optional note about documents",  // Optional
  
  seoKeywords: [  // Optional - can be empty array []
    "Keyword 1",
    "Keyword 2",
  ],
  
  callToAction: "Your call to action text here...\nCan be multiple lines.\nUse \\n for line breaks.",
},
```

### Step 3: Map Service Name to Slug (for Links)
In the `nameToSlug` object, add a mapping so links from Home2 and Header work:

```typescript
export const nameToSlug: Record<string, ServiceSlug> = {
  "Project Loan": "project-loan",
  "Machine Loan": "machinery-loan",
  "Working Capital Loan (OD/CC)": "working-capital-loan",  // ← Add your mapping
  // The key should match EXACTLY the title in Home2.tsx or Header.tsx
};
```

### Step 4: Test Your Service Page
1. Start your dev server: `npm run dev`
2. Visit: `http://localhost:3000/services/your-slug-name`
3. Check that all sections render correctly

---

## All 16 Services You Need to Add

Based on your Home2.tsx, here are all services that need pages:

### Registration (5 services)
1. ✅ Project Loan - DONE
2. ✅ Machinery Loan - DONE
3. ⬜ Private Limited Company Registration → slug: `private-limited-company`
4. ⬜ LLP Registration → slug: `llp-registration`
5. ⬜ One Person Company Registration → slug: `one-person-company`
6. ⬜ Partnership Firm Registration → slug: `partnership-firm`
7. ⬜ Startup India Registration → slug: `startup-india-registration`

### Loans (5 more services)
8. ⬜ Working Capital Loan (OD/CC) → slug: `working-capital-loan`
9. ⬜ MSME Loan → slug: `msme-loan`
10. ⬜ Property Loan → slug: `property-loan`
11. ⬜ Secured Loan → slug: `secured-loan`
12. ⬜ Unsecured Loan → slug: `unsecured-loan`

### Subsidy (6 services)
13. ⬜ Subsidy for MSME → slug: `subsidy-msme`
14. ⬜ Subsidy for Large/Thrust Sector → slug: `subsidy-large-thrust-sector`
15. ⬜ Subsidy for Mega Sector → slug: `subsidy-mega-sector`
16. ⬜ Subsidy for IT / ITeS → slug: `subsidy-it-ites`
17. ⬜ Subsidy for Logistic Park → slug: `subsidy-logistic-park`
18. ⬜ Subsidy for GCC → slug: `subsidy-gcc`

### Tax (2 services)
19. ⬜ GST Registration & Litigation → slug: `gst-registration-litigation`
20. ⬜ Income Tax & TDS → slug: `income-tax-tds`

### Audit (4 services)
21. ⬜ Statutory Audit → slug: `statutory-audit`
22. ⬜ Tax Audit → slug: `tax-audit`
23. ⬜ Internal Audit → slug: `internal-audit`
24. ⬜ Bank Audit → slug: `bank-audit`

### IPO (1 service)
25. ⬜ IPO Advisory & Support → slug: `ipo-advisory-support`

**Total: 25 services** (2 done, 23 remaining)

---

## Quick Copy-Paste Template

Copy this template and fill in your content:

```typescript
"your-slug-here": {
  slug: "your-slug-here",
  name: "Your Service Name",
  category: "Loans", // or "Registration", "Subsidy", "Tax", "Audit", "IPO"
  title: "Your Service Title in Ahmedabad",
  intro: "Introduction paragraph...",
  whyNeed: {
    title: "Why You Need This?",
    points: ["Point 1", "Point 2"],
    description: "Optional description",
  },
  services: {
    title: "Our Services",
    description: "Optional description",
    items: [
      {
        subtitle: "Service 1",
        note: "Optional note",
        details: ["Detail 1", "Detail 2"],
      },
    ],
  },
  whoCanApply: ["Who 1", "Who 2"],
  whoCanApplyDescription: "Optional",
  whyChooseUs: ["✔ Reason 1", "✔ Reason 2"],
  whyChooseUsDescription: "Optional",
  documentsRequired: ["Doc 1", "Doc 2"], // Optional
  documentsRequiredNote: "Optional note", // Optional
  seoKeywords: ["Keyword 1", "Keyword 2"], // Can be []
  callToAction: "Your CTA text...",
},
```

---

## Tips

1. **Slug naming**: Use lowercase, hyphens: `working-capital-loan` ✅ (not `workingCapitalLoan` or `working_capital_loan`)

2. **Line breaks**: Use `\n` in strings for new lines in `intro` and `callToAction`

3. **Optional fields**: You can omit any optional field (like `whoCanApply`, `documentsRequired`, etc.) if not needed

4. **Empty arrays**: If you don't have SEO keywords yet, use `seoKeywords: []`

5. **Name mapping**: Make sure the key in `nameToSlug` matches EXACTLY the title in Home2.tsx or Header.tsx

---

## Need Help?

If you get stuck:
1. Check existing services (`project-loan` and `machinery-loan`) as examples
2. Make sure your slug matches in both `ServiceSlug` type and `servicesContent` object
3. Check that `nameToSlug` mapping matches the exact title from Home2/Header


