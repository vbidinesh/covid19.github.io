const tableDataNested = [{"state": "Maharashtra", "confirmed": 37136, "recovered": 9639, "deaths": 1325, "active": 26172, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tamil Nadu", "confirmed": 12448, "recovered": 4895, "deaths": 85, "active": 7468, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 12141, "recovered": 5043, "deaths": 719, "active": 6379, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Delhi", "confirmed": 11088, "recovered": 5192, "deaths": 176, "active": 5720, "active_new": 82, "confirmed_new": 534, "recovered_new": 442, "deaths_new": 10}, {"state": "Rajasthan", "confirmed": 5952, "recovered": 3373, "deaths": 143, "active": 2436, "active_new": 71, "confirmed_new": 107, "recovered_new": 36, "deaths_new": 0}, {"state": "Madhya Pradesh", "confirmed": 5543, "recovered": 2631, "deaths": 260, "active": 2652, "active_new": 76, "confirmed_new": 78, "recovered_new": 0, "deaths_new": 2}, {"state": "Uttar Pradesh", "confirmed": 4926, "recovered": 2918, "deaths": 123, "active": 1885, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 2961, "recovered": 1074, "deaths": 250, "active": 1637, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 2560, "recovered": 1664, "deaths": 53, "active": 843, "active_new": 27, "confirmed_new": 71, "recovered_new": 43, "deaths_new": 1}, {"state": "Punjab", "confirmed": 2002, "recovered": 1642, "deaths": 38, "active": 322, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Telangana", "confirmed": 1634, "recovered": 1011, "deaths": 38, "active": 585, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 1579, "recovered": 548, "deaths": 9, "active": 1022, "active_new": 29, "confirmed_new": 60, "recovered_new": 31, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 1458, "recovered": 553, "deaths": 40, "active": 864, "active_new": 53, "confirmed_new": 63, "recovered_new": 10, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 1317, "recovered": 647, "deaths": 17, "active": 653, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 1052, "recovered": 343, "deaths": 6, "active": 703, "active_new": 37, "confirmed_new": 74, "recovered_new": 36, "deaths_new": 1}, {"state": "Haryana", "confirmed": 970, "recovered": 628, "deaths": 14, "active": 328, "active_new": 5, "confirmed_new": 6, "recovered_new": 1, "deaths_new": 0}, {"state": "State Unassigned", "confirmed": 1096, "recovered": 0, "deaths": 0, "active": 1096, "active_new": 282, "confirmed_new": 282, "recovered_new": 0, "deaths_new": 0}, {"state": "Kerala", "confirmed": 643, "recovered": 497, "deaths": 4, "active": 142, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 248, "recovered": 127, "deaths": 3, "active": 118, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 199, "recovered": 57, "deaths": 3, "active": 139, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 173, "recovered": 116, "deaths": 0, "active": 57, "active_new": 4, "confirmed_new": 4, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 158, "recovered": 42, "deaths": 4, "active": 110, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 111, "recovered": 52, "deaths": 1, "active": 58, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 100, "recovered": 59, "deaths": 0, "active": 41, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 92, "recovered": 47, "deaths": 4, "active": 38, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 46, "recovered": 7, "deaths": 0, "active": 39, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 43, "recovered": 43, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 22, "recovered": 10, "deaths": 0, "active": 12, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 13, "recovered": 12, "deaths": 1, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 9, "recovered": 2, "deaths": 0, "active": 7, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];