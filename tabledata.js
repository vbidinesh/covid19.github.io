const tableDataNested = [{"state": "Maharashtra", "confirmed": 3202, "recovered": 300, "deaths": 194, "active": 2708, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Delhi", "confirmed": 1640, "recovered": 52, "deaths": 38, "active": 1550, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tamil Nadu", "confirmed": 1267, "recovered": 180, "deaths": 15, "active": 1072, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 1193, "recovered": 183, "deaths": 17, "active": 993, "active_new": 37, "confirmed_new": 62, "recovered_new": 19, "deaths_new": 6}, {"state": "Madhya Pradesh", "confirmed": 1164, "recovered": 70, "deaths": 55, "active": 1039, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 1021, "recovered": 74, "deaths": 38, "active": 909, "active_new": 89, "confirmed_new": 92, "recovered_new": 1, "deaths_new": 2}, {"state": "Uttar Pradesh", "confirmed": 805, "recovered": 68, "deaths": 13, "active": 724, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Telangana", "confirmed": 700, "recovered": 187, "deaths": 18, "active": 495, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 572, "recovered": 35, "deaths": 14, "active": 523, "active_new": 23, "confirmed_new": 38, "recovered_new": 15, "deaths_new": 0}, {"state": "Kerala", "confirmed": 394, "recovered": 245, "deaths": 2, "active": 147, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 359, "recovered": 88, "deaths": 13, "active": 258, "active_new": 38, "confirmed_new": 44, "recovered_new": 6, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 314, "recovered": 38, "deaths": 5, "active": 271, "active_new": -1, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 1}, {"state": "West Bengal", "confirmed": 255, "recovered": 51, "deaths": 10, "active": 194, "active_new": 15, "confirmed_new": 24, "recovered_new": 9, "deaths_new": 0}, {"state": "Haryana", "confirmed": 222, "recovered": 82, "deaths": 3, "active": 137, "active_new": -10, "confirmed_new": 7, "recovered_new": 17, "deaths_new": 0}, {"state": "Punjab", "confirmed": 197, "recovered": 29, "deaths": 14, "active": 154, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 83, "recovered": 37, "deaths": 1, "active": 45, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 60, "recovered": 19, "deaths": 1, "active": 40, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 40, "recovered": 9, "deaths": 0, "active": 31, "active_new": 3, "confirmed_new": 3, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 36, "recovered": 23, "deaths": 0, "active": 13, "active_new": 3, "confirmed_new": 3, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 35, "recovered": 16, "deaths": 2, "active": 17, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 34, "recovered": 5, "deaths": 1, "active": 28, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 29, "recovered": 0, "deaths": 2, "active": 27, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 21, "recovered": 9, "deaths": 0, "active": 12, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 18, "recovered": 14, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 12, "recovered": 11, "deaths": 0, "active": 1, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 9, "recovered": 0, "deaths": 1, "active": 8, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 6, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 7, "recovered": 1, "deaths": 0, "active": 6, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": -1, "confirmed_new": -1, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];