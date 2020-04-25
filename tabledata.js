const tableDataNested = [{"state": "Maharashtra", "confirmed": 6817, "recovered": 957, "deaths": 301, "active": 5559, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Delhi", "confirmed": 2514, "recovered": 857, "deaths": 53, "active": 1604, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 2815, "recovered": 265, "deaths": 127, "active": 2423, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 2061, "recovered": 493, "deaths": 33, "active": 1535, "active_new": 26, "confirmed_new": 27, "recovered_new": 0, "deaths_new": 1}, {"state": "Tamil Nadu", "confirmed": 1755, "recovered": 866, "deaths": 22, "active": 867, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Madhya Pradesh", "confirmed": 1846, "recovered": 210, "deaths": 92, "active": 1544, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 1778, "recovered": 248, "deaths": 26, "active": 1504, "active_new": 134, "confirmed_new": 157, "recovered_new": 22, "deaths_new": 1}, {"state": "Telangana", "confirmed": 983, "recovered": 291, "deaths": 25, "active": 667, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 1016, "recovered": 171, "deaths": 31, "active": 814, "active_new": 33, "confirmed_new": 61, "recovered_new": 26, "deaths_new": 2}, {"state": "Karnataka", "confirmed": 500, "recovered": 158, "deaths": 18, "active": 324, "active_new": 15, "confirmed_new": 16, "recovered_new": 1, "deaths_new": 0}, {"state": "Kerala", "confirmed": 457, "recovered": 338, "deaths": 3, "active": 116, "active_new": 0, "confirmed_new": 7, "recovered_new": 7, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 494, "recovered": 109, "deaths": 6, "active": 379, "active_new": 39, "confirmed_new": 40, "recovered_new": 0, "deaths_new": 1}, {"state": "West Bengal", "confirmed": 571, "recovered": 103, "deaths": 18, "active": 450, "active_new": 57, "confirmed_new": 57, "recovered_new": 0, "deaths_new": 0}, {"state": "Haryana", "confirmed": 280, "recovered": 186, "deaths": 3, "active": 91, "active_new": 5, "confirmed_new": 5, "recovered_new": 0, "deaths_new": 0}, {"state": "Punjab", "confirmed": 298, "recovered": 70, "deaths": 17, "active": 211, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 238, "recovered": 44, "deaths": 2, "active": 192, "active_new": 15, "confirmed_new": 15, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 94, "recovered": 33, "deaths": 1, "active": 60, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 48, "recovered": 25, "deaths": 0, "active": 23, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 63, "recovered": 8, "deaths": 3, "active": 52, "active_new": 4, "confirmed_new": 4, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 40, "recovered": 18, "deaths": 2, "active": 20, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 37, "recovered": 32, "deaths": 0, "active": 5, "active_new": -1, "confirmed_new": 1, "recovered_new": 2, "deaths_new": 0}, {"state": "Assam", "confirmed": 36, "recovered": 19, "deaths": 1, "active": 16, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 28, "recovered": 15, "deaths": 0, "active": 13, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 20, "recovered": 16, "deaths": 0, "active": 4, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 29, "recovered": 11, "deaths": 0, "active": 18, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 12, "recovered": 0, "deaths": 1, "active": 11, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 7, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 8, "recovered": 4, "deaths": 0, "active": 4, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 2, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 2, "recovered": 2, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];