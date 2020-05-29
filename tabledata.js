const tableDataNested = [{"state": "Maharashtra", "confirmed": 59546, "recovered": 18616, "deaths": 1982, "active": 38948, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tamil Nadu", "confirmed": 20246, "recovered": 11313, "deaths": 157, "active": 8776, "active_new": 100, "confirmed_new": 874, "recovered_new": 765, "deaths_new": 9}, {"state": "Delhi", "confirmed": 17387, "recovered": 7846, "deaths": 398, "active": 9143, "active_new": 673, "confirmed_new": 1106, "recovered_new": 351, "deaths_new": 82}, {"state": "Gujarat", "confirmed": 15572, "recovered": 8003, "deaths": 960, "active": 6609, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 8158, "recovered": 4855, "deaths": 182, "active": 3121, "active_new": 49, "confirmed_new": 91, "recovered_new": 40, "deaths_new": 2}, {"state": "Madhya Pradesh", "confirmed": 7453, "recovered": 4050, "deaths": 321, "active": 3082, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 7170, "recovered": 4215, "deaths": 197, "active": 2758, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 4813, "recovered": 1775, "deaths": 302, "active": 2736, "active_new": 163, "confirmed_new": 277, "recovered_new": 107, "deaths_new": 7}, {"state": "State Unassigned", "confirmed": 4673, "recovered": 0, "deaths": 0, "active": 4673, "active_new": 341, "confirmed_new": 341, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 3330, "recovered": 2234, "deaths": 60, "active": 1036, "active_new": -17, "confirmed_new": 85, "recovered_new": 101, "deaths_new": 1}, {"state": "Bihar", "confirmed": 3275, "recovered": 1050, "deaths": 15, "active": 2210, "active_new": 90, "confirmed_new": 90, "recovered_new": 0, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 2781, "recovered": 894, "deaths": 48, "active": 1837, "active_new": 171, "confirmed_new": 248, "recovered_new": 76, "deaths_new": 1}, {"state": "Punjab", "confirmed": 2197, "recovered": 1949, "deaths": 42, "active": 206, "active_new": 34, "confirmed_new": 39, "recovered_new": 3, "deaths_new": 2}, {"state": "Telangana", "confirmed": 2256, "recovered": 1345, "deaths": 67, "active": 844, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 2164, "recovered": 875, "deaths": 28, "active": 1261, "active_new": 111, "confirmed_new": 128, "recovered_new": 16, "deaths_new": 1}, {"state": "Odisha", "confirmed": 1723, "recovered": 977, "deaths": 9, "active": 737, "active_new": -29, "confirmed_new": 63, "recovered_new": 90, "deaths_new": 2}, {"state": "Haryana", "confirmed": 1535, "recovered": 884, "deaths": 19, "active": 632, "active_new": 28, "confirmed_new": 31, "recovered_new": 3, "deaths_new": 0}, {"state": "Kerala", "confirmed": 1151, "recovered": 565, "deaths": 9, "active": 577, "active_new": 52, "confirmed_new": 63, "recovered_new": 10, "deaths_new": 1}, {"state": "Assam", "confirmed": 936, "recovered": 126, "deaths": 4, "active": 803, "active_new": 34, "confirmed_new": 56, "recovered_new": 22, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 602, "recovered": 89, "deaths": 4, "active": 506, "active_new": 92, "confirmed_new": 102, "recovered_new": 10, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 469, "recovered": 212, "deaths": 4, "active": 253, "active_new": -22, "confirmed_new": -1, "recovered_new": 21, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 404, "recovered": 83, "deaths": 1, "active": 320, "active_new": 5, "confirmed_new": 6, "recovered_new": 0, "deaths_new": 1}, {"state": "Chandigarh", "confirmed": 289, "recovered": 189, "deaths": 4, "active": 96, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 291, "recovered": 81, "deaths": 6, "active": 201, "active_new": 2, "confirmed_new": 10, "recovered_new": 8, "deaths_new": 0}, {"state": "Tripura", "confirmed": 244, "recovered": 167, "deaths": 0, "active": 77, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 69, "recovered": 38, "deaths": 0, "active": 31, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 74, "recovered": 43, "deaths": 0, "active": 31, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 53, "recovered": 17, "deaths": 0, "active": 36, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 58, "recovered": 4, "deaths": 0, "active": 54, "active_new": 3, "confirmed_new": 3, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 27, "recovered": 12, "deaths": 1, "active": 14, "active_new": 6, "confirmed_new": 6, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 25, "recovered": 0, "deaths": 0, "active": 25, "active_new": 7, "confirmed_new": 7, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 3, "recovered": 1, "deaths": 0, "active": 2, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];