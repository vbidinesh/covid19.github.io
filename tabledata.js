const tableDataNested = [{"state": "Maharashtra", "confirmed": 52667, "recovered": 15786, "deaths": 1695, "active": 35186, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tamil Nadu", "confirmed": 17082, "recovered": 8731, "deaths": 119, "active": 8232, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 14468, "recovered": 6636, "deaths": 888, "active": 6944, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Delhi", "confirmed": 14465, "recovered": 6954, "deaths": 288, "active": 7223, "active_new": 217, "confirmed_new": 412, "recovered_new": 183, "deaths_new": 12}, {"state": "Rajasthan", "confirmed": 7476, "recovered": 4165, "deaths": 167, "active": 3144, "active_new": 65, "confirmed_new": 176, "recovered_new": 109, "deaths_new": 2}, {"state": "Madhya Pradesh", "confirmed": 6859, "recovered": 3571, "deaths": 300, "active": 2988, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 6497, "recovered": 3660, "deaths": 169, "active": 2668, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 3816, "recovered": 1414, "deaths": 278, "active": 2124, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 2983, "recovered": 2017, "deaths": 57, "active": 909, "active_new": -29, "confirmed_new": 97, "recovered_new": 125, "deaths_new": 1}, {"state": "Bihar", "confirmed": 2870, "recovered": 807, "deaths": 13, "active": 2050, "active_new": 133, "confirmed_new": 133, "recovered_new": 0, "deaths_new": 0}, {"state": "State Unassigned", "confirmed": 2970, "recovered": 0, "deaths": 0, "active": 2970, "active_new": 328, "confirmed_new": 328, "recovered_new": 0, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 2282, "recovered": 722, "deaths": 44, "active": 1514, "active_new": 83, "confirmed_new": 100, "recovered_new": 17, "deaths_new": 0}, {"state": "Punjab", "confirmed": 2081, "recovered": 1913, "deaths": 40, "active": 128, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Telangana", "confirmed": 1920, "recovered": 1164, "deaths": 56, "active": 700, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 1668, "recovered": 809, "deaths": 23, "active": 836, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 1517, "recovered": 649, "deaths": 7, "active": 861, "active_new": 79, "confirmed_new": 79, "recovered_new": 0, "deaths_new": 0}, {"state": "Haryana", "confirmed": 1229, "recovered": 803, "deaths": 16, "active": 410, "active_new": 15, "confirmed_new": 16, "recovered_new": 1, "deaths_new": 0}, {"state": "Kerala", "confirmed": 964, "recovered": 532, "deaths": 6, "active": 426, "active_new": 67, "confirmed_new": 67, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 598, "recovered": 63, "deaths": 4, "active": 528, "active_new": 49, "confirmed_new": 49, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 405, "recovered": 148, "deaths": 4, "active": 253, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 400, "recovered": 64, "deaths": 4, "active": 329, "active_new": 45, "confirmed_new": 51, "recovered_new": 6, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 306, "recovered": 71, "deaths": 0, "active": 235, "active_new": 10, "confirmed_new": 14, "recovered_new": 4, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 278, "recovered": 187, "deaths": 4, "active": 87, "active_new": 12, "confirmed_new": 12, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 233, "recovered": 63, "deaths": 4, "active": 163, "active_new": 10, "confirmed_new": 10, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 198, "recovered": 165, "deaths": 0, "active": 33, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 67, "recovered": 19, "deaths": 0, "active": 48, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 53, "recovered": 43, "deaths": 0, "active": 10, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 49, "recovered": 17, "deaths": 0, "active": 32, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 39, "recovered": 4, "deaths": 0, "active": 35, "active_new": 3, "confirmed_new": 3, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 15, "recovered": 12, "deaths": 1, "active": 2, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 4, "recovered": 0, "deaths": 0, "active": 4, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];