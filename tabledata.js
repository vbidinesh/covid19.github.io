const tableDataNested = [{"state": "Maharashtra", "confirmed": 7628, "recovered": 1076, "deaths": 323, "active": 6229, "active_new": 670, "confirmed_new": 811, "recovered_new": 119, "deaths_new": 22}, {"state": "Delhi", "confirmed": 2625, "recovered": 869, "deaths": 54, "active": 1702, "active_new": 98, "confirmed_new": 111, "recovered_new": 12, "deaths_new": 1}, {"state": "Gujarat", "confirmed": 3071, "recovered": 282, "deaths": 133, "active": 2656, "active_new": 233, "confirmed_new": 256, "recovered_new": 17, "deaths_new": 6}, {"state": "Rajasthan", "confirmed": 2083, "recovered": 513, "deaths": 34, "active": 1536, "active_new": 27, "confirmed_new": 49, "recovered_new": 20, "deaths_new": 2}, {"state": "Tamil Nadu", "confirmed": 1821, "recovered": 960, "deaths": 23, "active": 838, "active_new": -29, "confirmed_new": 66, "recovered_new": 94, "deaths_new": 1}, {"state": "Madhya Pradesh", "confirmed": 1945, "recovered": 281, "deaths": 99, "active": 1565, "active_new": 21, "confirmed_new": 99, "recovered_new": 71, "deaths_new": 7}, {"state": "Uttar Pradesh", "confirmed": 1793, "recovered": 261, "deaths": 27, "active": 1505, "active_new": 135, "confirmed_new": 172, "recovered_new": 35, "deaths_new": 2}, {"state": "Telangana", "confirmed": 990, "recovered": 307, "deaths": 25, "active": 658, "active_new": -9, "confirmed_new": 7, "recovered_new": 16, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 1016, "recovered": 171, "deaths": 31, "active": 814, "active_new": 33, "confirmed_new": 61, "recovered_new": 26, "deaths_new": 2}, {"state": "Karnataka", "confirmed": 500, "recovered": 158, "deaths": 18, "active": 324, "active_new": 20, "confirmed_new": 26, "recovered_new": 6, "deaths_new": 0}, {"state": "Kerala", "confirmed": 458, "recovered": 338, "deaths": 4, "active": 116, "active_new": 0, "confirmed_new": 8, "recovered_new": 7, "deaths_new": 1}, {"state": "Jammu and Kashmir", "confirmed": 494, "recovered": 112, "deaths": 6, "active": 376, "active_new": 36, "confirmed_new": 40, "recovered_new": 3, "deaths_new": 1}, {"state": "West Bengal", "confirmed": 571, "recovered": 103, "deaths": 18, "active": 450, "active_new": 57, "confirmed_new": 57, "recovered_new": 0, "deaths_new": 0}, {"state": "Haryana", "confirmed": 287, "recovered": 191, "deaths": 3, "active": 93, "active_new": 7, "confirmed_new": 12, "recovered_new": 5, "deaths_new": 0}, {"state": "Punjab", "confirmed": 308, "recovered": 72, "deaths": 17, "active": 219, "active_new": 8, "confirmed_new": 10, "recovered_new": 2, "deaths_new": 0}, {"state": "Bihar", "confirmed": 242, "recovered": 45, "deaths": 2, "active": 195, "active_new": 18, "confirmed_new": 19, "recovered_new": 1, "deaths_new": 0}, {"state": "Odisha", "confirmed": 94, "recovered": 34, "deaths": 1, "active": 59, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 48, "recovered": 26, "deaths": 0, "active": 22, "active_new": -1, "confirmed_new": 0, "recovered_new": 1, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 66, "recovered": 8, "deaths": 3, "active": 55, "active_new": 7, "confirmed_new": 7, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 40, "recovered": 23, "deaths": 2, "active": 15, "active_new": -5, "confirmed_new": 0, "recovered_new": 5, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 37, "recovered": 32, "deaths": 0, "active": 5, "active_new": -1, "confirmed_new": 1, "recovered_new": 2, "deaths_new": 0}, {"state": "Assam", "confirmed": 36, "recovered": 19, "deaths": 1, "active": 16, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 28, "recovered": 15, "deaths": 0, "active": 13, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 20, "recovered": 16, "deaths": 0, "active": 4, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 11, "deaths": 0, "active": 22, "active_new": 4, "confirmed_new": 4, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 12, "recovered": 0, "deaths": 1, "active": 11, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 7, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 8, "recovered": 4, "deaths": 0, "active": 4, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 2, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 2, "recovered": 2, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];