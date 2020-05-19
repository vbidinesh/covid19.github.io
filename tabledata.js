const tableDataNested = [{"state": "Maharashtra", "confirmed": 35058, "recovered": 8437, "deaths": 1249, "active": 25372, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Tamil Nadu", "confirmed": 11760, "recovered": 4406, "deaths": 82, "active": 7272, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Gujarat", "confirmed": 11746, "recovered": 4804, "deaths": 694, "active": 6248, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Delhi", "confirmed": 10554, "recovered": 4750, "deaths": 166, "active": 5638, "active_new": 229.0, "confirmed_new": 500.0, "recovered_new": 265.0, "deaths_new": 6.0}, {"state": "Rajasthan", "confirmed": 5757, "recovered": 3232, "deaths": 139, "active": 2386, "active_new": 235.0, "confirmed_new": 250.0, "recovered_new": 14.0, "deaths_new": 1.0}, {"state": "Madhya Pradesh", "confirmed": 5465, "recovered": 2631, "deaths": 258, "active": 2576, "active_new": 27.0, "confirmed_new": 229.0, "recovered_new": 196.0, "deaths_new": 6.0}, {"state": "Uttar Pradesh", "confirmed": 4605, "recovered": 2783, "deaths": 118, "active": 1704, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "West Bengal", "confirmed": 2825, "recovered": 1006, "deaths": 244, "active": 1575, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Andhra Pradesh", "confirmed": 2489, "recovered": 1621, "deaths": 52, "active": 816, "active_new": -14.0, "confirmed_new": 57.0, "recovered_new": 69.0, "deaths_new": 2.0}, {"state": "Punjab", "confirmed": 2002, "recovered": 1642, "deaths": 38, "active": 322, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Telangana", "confirmed": 1592, "recovered": 1002, "deaths": 34, "active": 556, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Bihar", "confirmed": 1495, "recovered": 517, "deaths": 9, "active": 969, "active_new": 28.0, "confirmed_new": 72.0, "recovered_new": 44.0, "deaths_new": 0.0}, {"state": "Jammu and Kashmir", "confirmed": 1289, "recovered": 609, "deaths": 15, "active": 665, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Karnataka", "confirmed": 1395, "recovered": 543, "deaths": 40, "active": 811, "active_new": 133.0, "confirmed_new": 149.0, "recovered_new": 13.0, "deaths_new": 3.0}, {"state": "Haryana", "confirmed": 942, "recovered": 601, "deaths": 14, "active": 327, "active_new": 11.0, "confirmed_new": 14.0, "recovered_new": 3.0, "deaths_new": 0.0}, {"state": "Odisha", "confirmed": 978, "recovered": 307, "deaths": 5, "active": 666, "active_new": 71.0, "confirmed_new": 102.0, "recovered_new": 30.0, "deaths_new": 1.0}, {"state": "Kerala", "confirmed": 643, "recovered": 497, "deaths": 4, "active": 142, "active_new": 12.0, "confirmed_new": 12.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Jharkhand", "confirmed": 228, "recovered": 127, "deaths": 3, "active": 98, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Chandigarh", "confirmed": 199, "recovered": 57, "deaths": 3, "active": 139, "active_new": 0.0, "confirmed_new": 3.0, "recovered_new": 3.0, "deaths_new": 0.0}, {"state": "Tripura", "confirmed": 165, "recovered": 89, "deaths": 0, "active": 76, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Assam", "confirmed": 142, "recovered": 42, "deaths": 4, "active": 94, "active_new": 26.0, "confirmed_new": 26.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Uttarakhand", "confirmed": 104, "recovered": 52, "deaths": 1, "active": 51, "active_new": 8.0, "confirmed_new": 8.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Himachal Pradesh", "confirmed": 90, "recovered": 45, "deaths": 3, "active": 39, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Chhattisgarh", "confirmed": 95, "recovered": 59, "deaths": 0, "active": 36, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Ladakh", "confirmed": 43, "recovered": 43, "deaths": 0, "active": 0, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Goa", "confirmed": 38, "recovered": 7, "deaths": 0, "active": 31, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Puducherry", "confirmed": 17, "recovered": 9, "deaths": 0, "active": 8, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Meghalaya", "confirmed": 13, "recovered": 12, "deaths": 1, "active": 0, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Manipur", "confirmed": 7, "recovered": 2, "deaths": 0, "active": 5, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Mizoram", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "State Unassigned", "confirmed": 814, "recovered": 0, "deaths": 0, "active": 814, "active_new": null, "confirmed_new": null, "recovered_new": null, "deaths_new": null}];