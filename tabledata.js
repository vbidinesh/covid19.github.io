const tableDataNested = [{"state": "Maharashtra", "confirmed": 41642, "recovered": 11726, "deaths": 1454, "active": 28462, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tamil Nadu", "confirmed": 13967, "recovered": 6282, "deaths": 95, "active": 7590, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 12910, "recovered": 5488, "deaths": 773, "active": 6649, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Delhi", "confirmed": 12319, "recovered": 5897, "deaths": 208, "active": 6214, "active_new": 316, "confirmed_new": 660, "recovered_new": 330, "deaths_new": 14}, {"state": "Rajasthan", "confirmed": 6281, "recovered": 3542, "deaths": 152, "active": 2587, "active_new": -4, "confirmed_new": 54, "recovered_new": 57, "deaths_new": 1}, {"state": "Madhya Pradesh", "confirmed": 5981, "recovered": 2844, "deaths": 271, "active": 2866, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 5515, "recovered": 3204, "deaths": 138, "active": 2173, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 3197, "recovered": 1193, "deaths": 259, "active": 1745, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 2667, "recovered": 1705, "deaths": 54, "active": 908, "active_new": 62, "confirmed_new": 62, "recovered_new": 0, "deaths_new": 0}, {"state": "Punjab", "confirmed": 2028, "recovered": 1819, "deaths": 39, "active": 170, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 1987, "recovered": 571, "deaths": 9, "active": 1407, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Telangana", "confirmed": 1699, "recovered": 1036, "deaths": 45, "active": 618, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 1710, "recovered": 588, "deaths": 41, "active": 1080, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 1449, "recovered": 684, "deaths": 20, "active": 745, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "State Unassigned", "confirmed": 1620, "recovered": 0, "deaths": 0, "active": 1620, "active_new": 217, "confirmed_new": 217, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 1189, "recovered": 393, "deaths": 7, "active": 789, "active_new": 86, "confirmed_new": 86, "recovered_new": 0, "deaths_new": 0}, {"state": "Haryana", "confirmed": 1031, "recovered": 681, "deaths": 14, "active": 336, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Kerala", "confirmed": 691, "recovered": 510, "deaths": 4, "active": 177, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 308, "recovered": 136, "deaths": 3, "active": 169, "active_new": 5, "confirmed_new": 5, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 218, "recovered": 178, "deaths": 3, "active": 37, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 211, "recovered": 55, "deaths": 4, "active": 149, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 175, "recovered": 148, "deaths": 0, "active": 27, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 146, "recovered": 53, "deaths": 1, "active": 92, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 152, "recovered": 55, "deaths": 4, "active": 90, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 132, "recovered": 59, "deaths": 0, "active": 73, "active_new": 4, "confirmed_new": 4, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 52, "recovered": 7, "deaths": 0, "active": 45, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 44, "recovered": 43, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 25, "recovered": 2, "deaths": 0, "active": 23, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 23, "recovered": 10, "deaths": 0, "active": 13, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 14, "recovered": 12, "deaths": 1, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];