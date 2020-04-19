const tableDataNested = [{"state": "Maharashtra", "confirmed": 4200, "recovered": 507, "deaths": 223, "active": 3470, "active_new": 398, "confirmed_new": 552, "recovered_new": 142, "deaths_new": 12}, {"state": "Delhi", "confirmed": 2003, "recovered": 290, "deaths": 45, "active": 1668, "active_new": 25, "confirmed_new": 110, "recovered_new": 83, "deaths_new": 2}, {"state": "Gujarat", "confirmed": 1743, "recovered": 105, "deaths": 63, "active": 1575, "active_new": 345, "confirmed_new": 367, "recovered_new": 12, "deaths_new": 10}, {"state": "Tamil Nadu", "confirmed": 1477, "recovered": 411, "deaths": 15, "active": 1051, "active_new": 59, "confirmed_new": 105, "recovered_new": 46, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 1478, "recovered": 205, "deaths": 23, "active": 1250, "active_new": 120, "confirmed_new": 127, "recovered_new": 5, "deaths_new": 2}, {"state": "Madhya Pradesh", "confirmed": 1407, "recovered": 131, "deaths": 72, "active": 1204, "active_new": -2, "confirmed_new": 5, "recovered_new": 4, "deaths_new": 3}, {"state": "Uttar Pradesh", "confirmed": 1100, "recovered": 127, "deaths": 17, "active": 956, "active_new": 104, "confirmed_new": 126, "recovered_new": 19, "deaths_new": 3}, {"state": "Telangana", "confirmed": 858, "recovered": 186, "deaths": 21, "active": 651, "active_new": 46, "confirmed_new": 49, "recovered_new": 0, "deaths_new": 3}, {"state": "Andhra Pradesh", "confirmed": 647, "recovered": 65, "deaths": 17, "active": 565, "active_new": 20, "confirmed_new": 44, "recovered_new": 23, "deaths_new": 1}, {"state": "Kerala", "confirmed": 401, "recovered": 270, "deaths": 2, "active": 129, "active_new": -11, "confirmed_new": 2, "recovered_new": 13, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 390, "recovered": 111, "deaths": 16, "active": 263, "active_new": -3, "confirmed_new": 6, "recovered_new": 7, "deaths_new": 2}, {"state": "Jammu and Kashmir", "confirmed": 354, "recovered": 56, "deaths": 5, "active": 293, "active_new": 8, "confirmed_new": 13, "recovered_new": 5, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 310, "recovered": 62, "deaths": 12, "active": 236, "active_new": 16, "confirmed_new": 23, "recovered_new": 7, "deaths_new": 0}, {"state": "Haryana", "confirmed": 250, "recovered": 104, "deaths": 3, "active": 143, "active_new": 14, "confirmed_new": 18, "recovered_new": 4, "deaths_new": 0}, {"state": "Punjab", "confirmed": 244, "recovered": 37, "deaths": 16, "active": 191, "active_new": 4, "confirmed_new": 10, "recovered_new": 6, "deaths_new": 0}, {"state": "Bihar", "confirmed": 96, "recovered": 42, "deaths": 2, "active": 52, "active_new": 10, "confirmed_new": 10, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 61, "recovered": 24, "deaths": 1, "active": 36, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 44, "recovered": 11, "deaths": 0, "active": 33, "active_new": 0, "confirmed_new": 2, "recovered_new": 2, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 39, "recovered": 16, "deaths": 2, "active": 21, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 41, "recovered": 0, "deaths": 2, "active": 39, "active_new": 9, "confirmed_new": 9, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 36, "recovered": 25, "deaths": 0, "active": 11, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 34, "recovered": 17, "deaths": 1, "active": 16, "active_new": -5, "confirmed_new": 0, "recovered_new": 5, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 26, "recovered": 13, "deaths": 0, "active": 13, "active_new": -1, "confirmed_new": 3, "recovered_new": 4, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 18, "recovered": 14, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 15, "recovered": 11, "deaths": 0, "active": 4, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 11, "recovered": 0, "deaths": 1, "active": 10, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 7, "deaths": 0, "active": 0, "active_new": -1, "confirmed_new": 0, "recovered_new": 1, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 7, "recovered": 4, "deaths": 0, "active": 3, "active_new": -3, "confirmed_new": 0, "recovered_new": 3, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];