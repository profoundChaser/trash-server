const User = require('../db/models/user')
const Garbage=require('../db/models/garbage')
const GarbageCategory=require('../db/models/garbage_category')
const KeyWords=require('../db/models/keywords')
const KeyWordsNum=require('../db/models/keywords_num')
module.exports = {
    User,
    Garbage,
    GarbageCategory,
    KeyWords,
    KeyWordsNum
}
