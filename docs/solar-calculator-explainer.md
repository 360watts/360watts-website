# Solar Calculator – Plain-English Explanation (with numbers)

This document explains how the 360watts solar calculator works in simple terms, with real numbers from the current model.

## Mermaid overview (formulas + example values)
```mermaid
flowchart TD
  A[Input\nBill amount (Rs) or Units (kWh)] --> B{Bill amount provided?}
  B -- Yes --> C[Energy charge = Bill - Fixed charge\nExample: 2500 - 60 = 2440]
  B -- No --> D[Use provided units\nExample: 576 units]
  C --> E[Estimate units from slabs\nExample: Rs 2440 => ~576 units]
  D --> F[Daily use = Units / 60 days\nExample: 576/60 = 9.6 kWh/day]
  E --> F
  F --> G[System kW = Daily kWh / (PSH * Loss)\nPSH=5.5, Loss=0.75\nExample: 9.6/(5.5*0.75)=2.33]
  G --> H[Round up to nearest 0.5 kW\nExample: 2.33 -> 2.5]
  H --> I[Panels = ceil(System kW / 0.6)\nExample: ceil(2.5/0.6)=5]
  I --> J[Actual DC kW = Panels * 0.6\nExample: 5*0.6=3.0]
  J --> K[Daily Gen = DC kW * PSH * Loss\nExample: 3.0*5.5*0.75=12.375]
  K --> L[Annual Gen = Daily Gen * 365\nExample: 4516 kWh/year]
  L --> M[Annual Savings = Annual Gen * Avg Tariff\nAvg tariff=Rs 7 -> Rs 31,612/year]
  J --> N[System Cost = DC kW * Rs 65,000\nExample: Rs 195,000]
  M --> O[ROI = Cost / Savings\nExample: 6.2 years]
  M --> P[NPV = -Cost + sum(Savings_t/(1+r)^t)\nr=8%, escalation=5%, degradation=0.6%, 25 years]
```

## 1) What you enter
You can provide **one** of these:
- **Bi-monthly bill amount (Rs)**, or
- **Estimated bi-monthly units (kWh)**

The billing cycle is **60 days**.

## 2) If you enter bill amount, how units are estimated
We first subtract a fixed service charge (Rs 60) to get the **energy charge**.

**Example:**
- Bill amount = **Rs 2,500**
- Energy charge = **Rs 2,500 - Rs 60 = Rs 2,440**

Then we apply the tariff slabs (TANGEDCO domestic model):
- First 100 units: **Rs 0**
- Next 100 units: **Rs 2.35 / unit**
- Next 200 units: **Rs 4.70 / unit**
- Next 100 units: **Rs 6.30 / unit**
- Next 100 units: **Rs 8.40 / unit**
- Next 200 units: **Rs 9.45 / unit**
- Next 200 units: **Rs 10.50 / unit**
- Above 1000: **Rs 11.55 / unit**

**For Rs 2,440 energy charge:**
- 101–200 units cost: **100 × 2.35 = Rs 235** (total paid: Rs 235)
- 201–400 units cost: **200 × 4.70 = Rs 940** (total paid: Rs 1,175)
- 401–500 units cost: **100 × 6.30 = Rs 630** (total paid: Rs 1,805)
- 501–600 units cost: **100 × 8.40 = Rs 840** (total paid: Rs 2,645)

Rs 2,440 is between Rs 1,805 and Rs 2,645, so units are **somewhere between 500 and 600**.

Remaining after first 500 units: **Rs 2,440 - Rs 1,805 = Rs 635**
- Units in 501–600 slab: **Rs 635 / 8.40 = 75.6 units**

**Estimated bi-monthly units = 100 (free) + 400 + 75.6 = 575.6 -> 576 units**

So **Rs 2,500 ˜ 576 units per 2 months**.

If the energy charge is **Rs 0 or less**, we return **0 units**.

## 3) Convert bi-monthly units to daily usage
We assume **60 days** per cycle.

**Example:**
- 576 units / 60 days = **9.6 kWh per day**

## 4) Size the solar system (kW)
We use:
- **Peak Sun Hours (PSH)** = **5.5 hours/day**
- **System loss factor** = **0.75** (accounts for heat, wiring, inverter losses, etc.)

**Formula:**
```
System kW = Daily kWh / (PSH * Loss Factor)
```

**Example:**
- System kW = 9.6 / (5.5 * 0.75)
- = 9.6 / 4.125
- = **2.33 kW**

We round **up to the nearest 0.5 kW**:
- **2.33 kW -> 2.5 kW**

## 5) Panel count and actual DC capacity
We assume:
- **Panel wattage = 600 W (0.6 kW)**

**Panels needed:**
```
Panels = ceil(2.5 kW / 0.6 kW) = ceil(4.17) = 5 panels
```

Actual DC capacity:
```
5 * 0.6 kW = 3.0 kW
```

So the system is sized to **3.0 kW DC** using 5 panels.

## 6) Expected generation (realistic output)
We apply losses to generation too:

**Daily generation:**
```
Daily kWh = DC kW * PSH * Loss Factor
= 3.0 * 5.5 * 0.75
= 12.375 kWh/day
```

**Annual generation:**
```
12.375 * 365 = 4,516 kWh/year
```

## 7) Required roof area
We assume:
- Panel size = **2.38 m * 1.30 m = 3.11 m^2**
- **20% extra** space for walkways and spacing

Area in m^2:
```
5 panels * 3.11 * 1.20 = 18.66 m^2
```
Convert to sq.ft:
```
18.66 * 10.764 = 201 sq.ft
```

## 8) Estimated cost
Cost per kW = **Rs 65,000**

```
3.0 kW * Rs 65,000 = Rs 195,000
```

## 9) Annual savings
Average tariff = **Rs 7 / kWh**

```
4,516 kWh * Rs 7 = Rs 31,612 per year
```

## 10) Simple payback (ROI)
```
ROI years = Cost / Annual savings
= 195,000 / 31,612 = 6.2 years
```

## 11) NPV (Net Present Value)
We model 25 years of savings with:
- **Tariff escalation:** +5% per year
- **Panel degradation:** -0.6% per year
- **Discount rate:** 8% per year

Each year’s cash flow is discounted back to today:
```
NPV = -Cost + sum(Savings_t / (1 + 0.08)^t)
```

This gives a realistic long-term value of the investment in today’s money.

---

## Summary of model constants
- Billing cycle: **60 days**
- Free slab: **100 units**
- Fixed charge: **Rs 60**
- PSH: **5.5 hours/day**
- Loss factor: **0.75**
- Panel: **600 W**
- Panel area: **3.11 m^2**
- Area buffer: **+20%**
- Cost: **Rs 65,000 / kW**
- Avg tariff: **Rs 7 / kWh**
- Escalation: **5% / year**
- Degradation: **0.6% / year**
- Discount rate: **8% / year**
- Lifespan: **25 years**
