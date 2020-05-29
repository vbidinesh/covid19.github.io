const tableDataNested = [{"state": "Maharashtra", "confirmed": 62228, "recovered": 26997, "deaths": 2098, "active": 33133, "active_new": -5815, "confirmed_new": 2682, "recovered_new": 8381, "deaths_new": 116}, {"state": "Tamil Nadu", "confirmed": 20246, "recovered": 11313, "deaths": 157, "active": 8776, "active_new": 100, "confirmed_new": 874, "recovered_new": 765, "deaths_new": 9}, {"state": "Delhi", "confirmed": 17386, "recovered": 7846, "deaths": 398, "active": 9142, "active_new": 672, "confirmed_new": 1105, "recovered_new": 351, "deaths_new": 82}, {"state": "Gujarat", "confirmed": 15944, "recovered": 8611, "deaths": 980, "active": 6353, "active_new": -256, "confirmed_new": 372, "recovered_new": 608, "deaths_new": 20}, {"state": "Rajasthan", "confirmed": 8365, "recovered": 5244, "deaths": 184, "active": 2937, "active_new": -135, "confirmed_new": 298, "recovered_new": 429, "deaths_new": 4}, {"state": "Madhya Pradesh", "confirmed": 7645, "recovered": 4269, "deaths": 334, "active": 3042, "active_new": -40, "confirmed_new": 192, "recovered_new": 219, "deaths_new": 13}, {"state": "Uttar Pradesh", "confirmed": 7445, "recovered": 4410, "deaths": 201, "active": 2834, "active_new": 76, "confirmed_new": 275, "recovered_new": 195, "deaths_new": 4}, {"state": "West Bengal", "confirmed": 4813, "recovered": 1775, "deaths": 302, "active": 2736, "active_new": 163, "confirmed_new": 277, "recovered_new": 107, "deaths_new": 7}, {"state": "State Unassigned", "confirmed": 4673, "recovered": 0, "deaths": 0, "active": 4673, "active_new": 341, "confirmed_new": 341, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 3330, "recovered": 2234, "deaths": 60, "active": 1036, "active_new": -17, "confirmed_new": 85, "recovered_new": 101, "deaths_new": 1}, {"state": "Bihar", "confirmed": 3359, "recovered": 1209, "deaths": 15, "active": 2135, "active_new": 15, "confirmed_new": 174, "recovered_new": 159, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 2781, "recovered": 894, "deaths": 48, "active": 1837, "active_new": 171, "confirmed_new": 248, "recovered_new": 76, "deaths_new": 1}, {"state": "Punjab", "confirmed": 2197, "recovered": 1949, "deaths": 42, "active": 206, "active_new": 34, "confirmed_new": 39, "recovered_new": 3, "deaths_new": 2}, {"state": "Telangana", "confirmed": 2425, "recovered": 1381, "deaths": 71, "active": 973, "active_new": 129, "confirmed_new": 169, "recovered_new": 36, "deaths_new": 4}, {"state": "Jammu and Kashmir", "confirmed": 2164, "recovered": 875, "deaths": 28, "active": 1261, "active_new": 111, "confirmed_new": 128, "recovered_new": 16, "deaths_new": 1}, {"state": "Odisha", "confirmed": 1723, "recovered": 977, "deaths": 9, "active": 737, "active_new": -29, "confirmed_new": 63, "recovered_new": 90, "deaths_new": 2}, {"state": "Haryana", "confirmed": 1721, "recovered": 940, "deaths": 19, "active": 762, "active_new": 158, "confirmed_new": 217, "recovered_new": 59, "deaths_new": 0}, {"state": "Kerala", "confirmed": 1151, "recovered": 565, "deaths": 9, "active": 577, "active_new": 52, "confirmed_new": 63, "recovered_new": 10, "deaths_new": 1}, {"state": "Assam", "confirmed": 1058, "recovered": 126, "deaths": 4, "active": 925, "active_new": 123, "confirmed_new": 145, "recovered_new": 22, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 716, "recovered": 102, "deaths": 4, "active": 607, "active_new": 193, "confirmed_new": 216, "recovered_new": 23, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 521, "recovered": 216, "deaths": 5, "active": 300, "active_new": 25, "confirmed_new": 51, "recovered_new": 25, "deaths_new": 1}, {"state": "Chhattisgarh", "confirmed": 415, "recovered": 100, "deaths": 1, "active": 314, "active_new": -1, "confirmed_new": 17, "recovered_new": 17, "deaths_new": 1}, {"state": "Chandigarh", "confirmed": 289, "recovered": 189, "deaths": 4, "active": 96, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 295, "recovered": 83, "deaths": 6, "active": 203, "active_new": 4, "confirmed_new": 14, "recovered_new": 10, "deaths_new": 0}, {"state": "Tripura", "confirmed": 254, "recovered": 167, "deaths": 0, "active": 87, "active_new": 10, "confirmed_new": 10, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 69, "recovered": 41, "deaths": 0, "active": 28, "active_new": -3, "confirmed_new": 0, "recovered_new": 3, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 74, "recovered": 43, "deaths": 0, "active": 31, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 53, "recovered": 17, "deaths": 0, "active": 36, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 59, "recovered": 6, "deaths": 0, "active": 53, "active_new": 2, "confirmed_new": 4, "recovered_new": 2, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 27, "recovered": 12, "deaths": 1, "active": 14, "active_new": 6, "confirmed_new": 6, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 25, "recovered": 0, "deaths": 0, "active": 25, "active_new": 7, "confirmed_new": 7, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 3, "recovered": 1, "deaths": 0, "active": 2, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];