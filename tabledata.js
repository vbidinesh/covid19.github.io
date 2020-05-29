const tableDataNested = [{"state": "Maharashtra", "confirmed": 59546, "recovered": 18616, "deaths": 1982, "active": 38948, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tamil Nadu", "confirmed": 19372, "recovered": 10548, "deaths": 148, "active": 8676, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Delhi", "confirmed": 17387, "recovered": 7846, "deaths": 398, "active": 9143, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 15572, "recovered": 8003, "deaths": 960, "active": 6609, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 8158, "recovered": 4855, "deaths": 182, "active": 3121, "active_new": 49, "confirmed_new": 91, "recovered_new": 40, "deaths_new": 2}, {"state": "Madhya Pradesh", "confirmed": 7453, "recovered": 4050, "deaths": 321, "active": 3082, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 7170, "recovered": 4215, "deaths": 197, "active": 2758, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 4536, "recovered": 1668, "deaths": 295, "active": 2573, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "State Unassigned", "confirmed": 4673, "recovered": 0, "deaths": 0, "active": 4673, "active_new": 341, "confirmed_new": 341, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 3245, "recovered": 2133, "deaths": 59, "active": 1053, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 3185, "recovered": 1050, "deaths": 15, "active": 2120, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 2711, "recovered": 869, "deaths": 47, "active": 1793, "active_new": 127, "confirmed_new": 178, "recovered_new": 51, "deaths_new": 0}, {"state": "Punjab", "confirmed": 2158, "recovered": 1946, "deaths": 40, "active": 172, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Telangana", "confirmed": 2256, "recovered": 1345, "deaths": 67, "active": 844, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 2036, "recovered": 859, "deaths": 27, "active": 1150, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 1723, "recovered": 887, "deaths": 9, "active": 827, "active_new": 61, "confirmed_new": 63, "recovered_new": 0, "deaths_new": 2}, {"state": "Haryana", "confirmed": 1535, "recovered": 884, "deaths": 19, "active": 632, "active_new": 28, "confirmed_new": 31, "recovered_new": 3, "deaths_new": 0}, {"state": "Kerala", "confirmed": 1089, "recovered": 555, "deaths": 8, "active": 526, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 911, "recovered": 104, "deaths": 4, "active": 800, "active_new": 31, "confirmed_new": 31, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 600, "recovered": 79, "deaths": 4, "active": 514, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 470, "recovered": 191, "deaths": 4, "active": 275, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 404, "recovered": 83, "deaths": 0, "active": 321, "active_new": 6, "confirmed_new": 6, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 289, "recovered": 189, "deaths": 4, "active": 96, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 290, "recovered": 77, "deaths": 6, "active": 204, "active_new": 5, "confirmed_new": 9, "recovered_new": 4, "deaths_new": 0}, {"state": "Tripura", "confirmed": 244, "recovered": 167, "deaths": 0, "active": 77, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 69, "recovered": 38, "deaths": 0, "active": 31, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 74, "recovered": 43, "deaths": 0, "active": 31, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 53, "recovered": 17, "deaths": 0, "active": 36, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 55, "recovered": 4, "deaths": 0, "active": 51, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 21, "recovered": 12, "deaths": 1, "active": 8, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 25, "recovered": 0, "deaths": 0, "active": 25, "active_new": 7, "confirmed_new": 7, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 3, "recovered": 1, "deaths": 0, "active": 2, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];