// ==========================================================
// LINGUAPRO - منصة تعلم اللغات الذكية المتكاملة
// ==========================================================

// ============ DATABASE - قاعدة البيانات الشاملة ============
const DB = {
  en: {
    name: 'English',
    flag: '🇬🇧',
    voice: 'en-US',
    levels: {
      A1: {
        name: 'مبتدئ A1',
        courses: [
          {
            id: 'a1_alphabet',
            icon: '🔤',
            title: 'الحروف الأبجدية',
            desc: 'تعلم الحروف الإنجليزية الـ26 مع النطق',
            items: [
              { word: 'A', pron: '/eɪ/', example: 'Apple', trans: 'تفاحة' },
              { word: 'B', pron: '/biː/', example: 'Ball', trans: 'كرة' },
              { word: 'C', pron: '/siː/', example: 'Cat', trans: 'قطة' },
              { word: 'D', pron: '/diː/', example: 'Dog', trans: 'كلب' },
              { word: 'E', pron: '/iː/', example: 'Egg', trans: 'بيضة' },
              { word: 'F', pron: '/ɛf/', example: 'Fish', trans: 'سمكة' },
              { word: 'G', pron: '/dʒiː/', example: 'Girl', trans: 'فتاة' },
              { word: 'H', pron: '/eɪtʃ/', example: 'House', trans: 'منزل' },
              { word: 'I', pron: '/aɪ/', example: 'Ice', trans: 'جليد' },
              { word: 'J', pron: '/dʒeɪ/', example: 'Jam', trans: 'مربى' },
              { word: 'K', pron: '/keɪ/', example: 'King', trans: 'ملك' },
              { word: 'L', pron: '/ɛl/', example: 'Lion', trans: 'أسد' },
              { word: 'M', pron: '/ɛm/', example: 'Moon', trans: 'قمر' },
              { word: 'N', pron: '/ɛn/', example: 'Nose', trans: 'أنف' },
              { word: 'O', pron: '/oʊ/', example: 'Orange', trans: 'برتقال' },
              { word: 'P', pron: '/piː/', example: 'Pen', trans: 'قلم' },
              { word: 'Q', pron: '/kjuː/', example: 'Queen', trans: 'ملكة' },
              { word: 'R', pron: '/ɑːr/', example: 'Rain', trans: 'مطر' },
              { word: 'S', pron: '/ɛs/', example: 'Sun', trans: 'شمس' },
              { word: 'T', pron: '/tiː/', example: 'Tree', trans: 'شجرة' },
              { word: 'U', pron: '/juː/', example: 'Umbrella', trans: 'مظلة' },
              { word: 'V', pron: '/viː/', example: 'Van', trans: 'شاحنة' },
              { word: 'W', pron: '/ˈdʌbəljuː/', example: 'Water', trans: 'ماء' },
              { word: 'X', pron: '/ɛks/', example: 'Box', trans: 'صندوق' },
              { word: 'Y', pron: '/waɪ/', example: 'Yellow', trans: 'أصفر' },
              { word: 'Z', pron: '/zɛd/', example: 'Zebra', trans: 'حمار وحشي' }
            ]
          },
          {
            id: 'a1_numbers',
            icon: '🔢',
            title: 'الأرقام 1-20',
            desc: 'الأرقام الأساسية مع النطق',
            items: [
              { word: 'One', pron: '/wʌn/', example: 'One apple', trans: 'تفاحة واحدة' },
              { word: 'Two', pron: '/tuː/', example: 'Two cats', trans: 'قطتان' },
              { word: 'Three', pron: '/θriː/', example: 'Three books', trans: 'ثلاثة كتب' },
              { word: 'Four', pron: '/fɔːr/', example: 'Four seasons', trans: 'أربعة فصول' },
              { word: 'Five', pron: '/faɪv/', example: 'Five fingers', trans: 'خمسة أصابع' },
              { word: 'Six', pron: '/sɪks/', example: 'Six eggs', trans: 'ست بيضات' },
              { word: 'Seven', pron: '/ˈsevən/', example: 'Seven days', trans: 'سبعة أيام' },
              { word: 'Eight', pron: '/eɪt/', example: 'Eight hours', trans: 'ثماني ساعات' },
              { word: 'Nine', pron: '/naɪn/', example: 'Nine students', trans: 'تسعة طلاب' },
              { word: 'Ten', pron: '/tɛn/', example: 'Ten dollars', trans: 'عشرة دولارات' },
              { word: 'Eleven', pron: '/ɪˈlɛvən/', example: 'Eleven players', trans: 'أحد عشر لاعباً' },
              { word: 'Twelve', pron: '/twɛlv/', example: 'Twelve months', trans: 'اثنا عشر شهراً' },
              { word: 'Thirteen', pron: '/ˌθɜːrˈtiːn/', example: 'Thirteen years', trans: 'ثلاثة عشر عاماً' },
              { word: 'Fourteen', pron: '/ˌfɔːrˈtiːn/', example: 'Fourteen days', trans: 'أربعة عشر يوماً' },
              { word: 'Fifteen', pron: '/ˌfɪfˈtiːn/', example: 'Fifteen minutes', trans: 'خمسة عشر دقيقة' },
              { word: 'Sixteen', pron: '/ˌsɪksˈtiːn/', example: 'Sixteen candles', trans: 'ستة عشر شمعة' },
              { word: 'Seventeen', pron: '/ˌsevənˈtiːn/', example: 'Seventeen cars', trans: 'سبعة عشر سيارة' },
              { word: 'Eighteen', pron: '/ˌeɪˈtiːn/', example: 'Eighteen people', trans: 'ثمانية عشر شخصاً' },
              { word: 'Nineteen', pron: '/ˌnaɪnˈtiːn/', example: 'Nineteen books', trans: 'تسعة عشر كتاباً' },
              { word: 'Twenty', pron: '/ˈtwɛnti/', example: 'Twenty students', trans: 'عشرون طالباً' }
            ]
          },
          {
            id: 'a1_greetings',
            icon: '👋',
            title: 'التحيات الأساسية',
            desc: 'كلمات الترحيب والتعارف',
            items: [
              { word: 'Hello', pron: '/həˈloʊ/', example: 'Hello! How are you?', trans: 'مرحباً! كيف حالك؟' },
              { word: 'Good morning', pron: '/ɡʊd ˈmɔːrnɪŋ/', example: 'Good morning, teacher!', trans: 'صباح الخير أستاذ!' },
              { word: 'Good evening', pron: '/ɡʊd ˈiːvnɪŋ/', example: 'Good evening, everyone.', trans: 'مساء الخير للجميع.' },
              { word: 'Good night', pron: '/ɡʊd naɪt/', example: 'Good night, mom.', trans: 'تصبحين على خير أمي.' },
              { word: 'Goodbye', pron: '/ɡʊdˈbaɪ/', example: 'Goodbye! See you tomorrow.', trans: 'وداعاً! أراك غداً.' },
              { word: 'Thank you', pron: '/θæŋk juː/', example: 'Thank you for your help.', trans: 'شكراً لمساعدتك.' },
              { word: 'Please', pron: '/pliːz/', example: 'Water, please.', trans: 'ماء، لو سمحت.' },
              { word: 'Sorry', pron: '/ˈsɑːri/', example: 'I am sorry.', trans: 'أنا آسف.' },
              { word: 'Excuse me', pron: '/ɪkˈskjuːz miː/', example: 'Excuse me, where is the bank?', trans: 'عفواً، أين البنك؟' },
              { word: 'Nice to meet you', pron: '/naɪs tuː miːt juː/', example: 'Nice to meet you, Ali!', trans: 'سعيد بلقائك يا علي!' }
            ]
          },
          {
            id: 'a1_colors',
            icon: '🎨',
            title: 'الألوان',
            desc: 'الألوان الأساسية',
            items: [
              { word: 'Red', pron: '/red/', example: 'The rose is red', trans: 'الوردة حمراء' },
              { word: 'Blue', pron: '/bluː/', example: 'The sky is blue', trans: 'السماء زرقاء' },
              { word: 'Green', pron: '/ɡriːn/', example: 'The grass is green', trans: 'العشب أخضر' },
              { word: 'Yellow', pron: '/ˈjeloʊ/', example: 'The sun is yellow', trans: 'الشمس صفراء' },
              { word: 'Orange', pron: '/ˈɔːrɪndʒ/', example: 'The orange is orange', trans: 'البرتقال برتقالي' },
              { word: 'Purple', pron: '/ˈpɜːrpəl/', example: 'The flower is purple', trans: 'الزهرة بنفسجية' },
              { word: 'Pink', pron: '/pɪŋk/', example: 'The dress is pink', trans: 'الفستان وردي' },
              { word: 'Brown', pron: '/braʊn/', example: 'The bear is brown', trans: 'الدب بني' },
              { word: 'Black', pron: '/blæk/', example: 'The car is black', trans: 'السيارة سوداء' },
              { word: 'White', pron: '/waɪt/', example: 'The snow is white', trans: 'الثلج أبيض' }
            ]
          },
          {
            id: 'a1_family',
            icon: '👨‍👩‍👧',
            title: 'العائلة',
            desc: 'أفراد العائلة',
            items: [
              { word: 'Father', pron: '/ˈfɑːðər/', example: 'My father works here', trans: 'أبي يعمل هنا' },
              { word: 'Mother', pron: '/ˈmʌðər/', example: 'My mother is a doctor', trans: 'أمي طبيبة' },
              { word: 'Brother', pron: '/ˈbrʌðər/', example: 'I have one brother', trans: 'لدي أخ واحد' },
              { word: 'Sister', pron: '/ˈsɪstər/', example: 'My sister is young', trans: 'أختي صغيرة' },
              { word: 'Son', pron: '/sʌn/', example: 'He is my son', trans: 'هو ابني' },
              { word: 'Daughter', pron: '/ˈdɔːtər/', example: 'She is my daughter', trans: 'هي ابنتي' },
              { word: 'Grandfather', pron: '/ˈɡrænfɑːðər/', example: 'My grandfather is old', trans: 'جدي كبير في السن' },
              { word: 'Grandmother', pron: '/ˈɡrænmʌðər/', example: 'My grandmother cooks well', trans: 'جدتي تطبخ جيداً' },
              { word: 'Family', pron: '/ˈfæməli/', example: 'I love my family', trans: 'أحب عائلتي' },
              { word: 'Baby', pron: '/ˈbeɪbi/', example: 'The baby is sleeping', trans: 'الطفل نائم' }
            ]
          },
          {
            id: 'a1_pronouns',
            icon: '👤',
            title: 'الضمائر',
            desc: 'الضمائر الشخصية',
            items: [
              { word: 'I', pron: '/aɪ/', example: 'I am a student', trans: 'أنا طالب' },
              { word: 'You', pron: '/juː/', example: 'You are my friend', trans: 'أنت صديقي' },
              { word: 'He', pron: '/hiː/', example: 'He is a teacher', trans: 'هو معلم' },
              { word: 'She', pron: '/ʃiː/', example: 'She is a doctor', trans: 'هي طبيبة' },
              { word: 'It', pron: '/ɪt/', example: 'It is a cat', trans: 'إنها قطة' },
              { word: 'We', pron: '/wiː/', example: 'We are students', trans: 'نحن طلاب' },
              { word: 'They', pron: '/ðeɪ/', example: 'They are friends', trans: 'هم أصدقاء' }
            ]
          },
          {
            id: 'a1_verbs',
            icon: '⚡',
            title: 'الأفعال الأساسية',
            desc: 'أهم 10 أفعال',
            items: [
              { word: 'to be', pron: '/tuː biː/', example: 'I am happy', trans: 'أنا سعيد' },
              { word: 'to have', pron: '/tuː hæv/', example: 'I have a car', trans: 'لدي سيارة' },
              { word: 'to go', pron: '/tuː ɡoʊ/', example: 'I go to school', trans: 'أذهب إلى المدرسة' },
              { word: 'to come', pron: '/tuː kʌm/', example: 'Come here please', trans: 'تعال هنا لو سمحت' },
              { word: 'to eat', pron: '/tuː iːt/', example: 'I eat breakfast', trans: 'آكل الإفطار' },
              { word: 'to drink', pron: '/tuː drɪŋk/', example: 'I drink water', trans: 'أشرب الماء' },
              { word: 'to see', pron: '/tuː siː/', example: 'I see a bird', trans: 'أرى طائراً' },
              { word: 'to speak', pron: '/tuː spiːk/', example: 'I speak English', trans: 'أتحدث الإنجليزية' },
              { word: 'to read', pron: '/tuː riːd/', example: 'I read books', trans: 'أقرأ كتباً' },
              { word: 'to write', pron: '/tuː raɪt/', example: 'I write a letter', trans: 'أكتب رسالة' }
            ]
          }
        ]
      },
      A2: {
        name: 'ما قبل المتوسط A2',
        courses: [
          {
            id: 'a2_daily_routine',
            icon: '⏰',
            title: 'الروتين اليومي',
            desc: 'أنشطة يومية بالجمل',
            items: [
              { word: 'wake up', pron: '/weɪk ʌp/', example: 'I wake up at 7 AM', trans: 'أستيقظ في السابعة صباحاً' },
              { word: 'take a shower', pron: '/teɪk ə ˈʃaʊər/', example: 'I take a shower every morning', trans: 'أستحم كل صباح' },
              { word: 'have breakfast', pron: '/hæv ˈbrekfəst/', example: 'We have breakfast together', trans: 'نتناول الإفطار معاً' },
              { word: 'go to work', pron: '/ɡoʊ tuː wɜːrk/', example: 'She goes to work by bus', trans: 'تذهب إلى العمل بالحافلة' },
              { word: 'have lunch', pron: '/hæv lʌntʃ/', example: 'I have lunch at noon', trans: 'أتناول الغداء عند الظهر' },
              { word: 'come back home', pron: '/kʌm bæk hoʊm/', example: 'He comes back home at 6 PM', trans: 'يعود إلى المنزل الساعة السادسة' },
              { word: 'watch TV', pron: '/wɑːtʃ ˌtiːˈviː/', example: 'We watch TV in the evening', trans: 'نشاهد التلفاز في المساء' },
              { word: 'go to bed', pron: '/ɡoʊ tuː bed/', example: 'I go to bed at 11 PM', trans: 'أنام في الحادية عشرة' }
            ]
          },
          {
            id: 'a2_food',
            icon: '🍽️',
            title: 'الطعام والمطعم',
            desc: 'مفردات المطعم',
            items: [
              { word: 'menu', pron: '/ˈmenjuː/', example: 'Can I see the menu?', trans: 'هل يمكنني رؤية القائمة؟' },
              { word: 'order', pron: '/ˈɔːrdər/', example: 'I want to order food', trans: 'أريد أن أطلب طعاماً' },
              { word: 'waiter', pron: '/ˈweɪtər/', example: 'The waiter is friendly', trans: 'النادل ودود' },
              { word: 'bill', pron: '/bɪl/', example: 'Can I have the bill?', trans: 'هل يمكنني الحصول على الفاتورة؟' },
              { word: 'delicious', pron: '/dɪˈlɪʃəs/', example: 'The food is delicious', trans: 'الطعام لذيذ' },
              { word: 'spicy', pron: '/ˈspaɪsi/', example: 'This dish is spicy', trans: 'هذا الطبق حار' },
              { word: 'vegetarian', pron: '/ˌvedʒəˈteriən/', example: 'I am vegetarian', trans: 'أنا نباتي' },
              { word: 'reservation', pron: '/ˌrezərˈveɪʃn/', example: 'I have a reservation', trans: 'لدي حجز' }
            ]
          },
          {
            id: 'a2_shopping',
            icon: '🛍️',
            title: 'التسوق',
            desc: 'مفردات التسوق',
            items: [
              { word: 'price', pron: '/praɪs/', example: 'What is the price?', trans: 'ما هو السعر؟' },
              { word: 'expensive', pron: '/ɪkˈspensɪv/', example: 'This is too expensive', trans: 'هذا غالٍ جداً' },
              { word: 'cheap', pron: '/tʃiːp/', example: 'That bag is cheap', trans: 'تلك الحقيبة رخيصة' },
              { word: 'discount', pron: '/ˈdɪskaʊnt/', example: 'Is there a discount?', trans: 'هل هناك خصم؟' },
              { word: 'cash', pron: '/kæʃ/', example: 'I pay in cash', trans: 'أدفع نقداً' },
              { word: 'credit card', pron: '/ˈkredɪt kɑːrd/', example: 'Can I use a credit card?', trans: 'هل يمكنني استخدام بطاقة ائتمان؟' },
              { word: 'receipt', pron: '/rɪˈsiːt/', example: 'Can I get a receipt?', trans: 'هل يمكنني الحصول على إيصال؟' }
            ]
          },
          {
            id: 'a2_travel',
            icon: '✈️',
            title: 'السفر',
            desc: 'مفردات المطار',
            items: [
              { word: 'airport', pron: '/ˈerpɔːrt/', example: 'The airport is far', trans: 'المطار بعيد' },
              { word: 'ticket', pron: '/ˈtɪkɪt/', example: 'I bought a ticket', trans: 'اشتريت تذكرة' },
              { word: 'passport', pron: '/ˈpæspɔːrt/', example: 'Show me your passport', trans: 'أرني جواز سفرك' },
              { word: 'luggage', pron: '/ˈlʌɡɪdʒ/', example: 'My luggage is heavy', trans: 'أمتعتي ثقيلة' },
              { word: 'flight', pron: '/flaɪt/', example: 'The flight is delayed', trans: 'الرحلة متأخرة' },
              { word: 'arrive', pron: '/əˈraɪv/', example: 'We arrive at 9 PM', trans: 'نصل في التاسعة مساءً' },
              { word: 'depart', pron: '/dɪˈpɑːrt/', example: 'The plane departs soon', trans: 'الطائرة تقلع قريباً' }
            ]
          }
        ]
      },
      B1: {
        name: 'متوسط B1',
        courses: [
          {
            id: 'b1_past_tense',
            icon: '📖',
            title: 'الماضي البسيط',
            desc: 'الأفعال في الماضي',
            items: [
              { word: 'went', pron: '/went/', example: 'I went to Paris last year', trans: 'ذهبت إلى باريس العام الماضي' },
              { word: 'saw', pron: '/sɔː/', example: 'I saw a movie yesterday', trans: 'شاهدت فيلماً أمس' },
              { word: 'ate', pron: '/eɪt/', example: 'She ate pizza last night', trans: 'أكلت بيتزا الليلة الماضية' },
              { word: 'bought', pron: '/bɔːt/', example: 'He bought a new car', trans: 'اشترى سيارة جديدة' },
              { word: 'made', pron: '/meɪd/', example: 'They made a cake', trans: 'صنعوا كعكة' },
              { word: 'took', pron: '/tʊk/', example: 'I took many photos', trans: 'التقطت صوراً كثيرة' },
              { word: 'came', pron: '/keɪm/', example: 'She came late', trans: 'جاءت متأخرة' }
            ]
          },
          {
            id: 'b1_present_perfect',
            icon: '🎯',
            title: 'المضارع التام',
            desc: 'have/has + past participle',
            items: [
              { word: 'have been', pron: '/hæv biːn/', example: 'I have been to London', trans: 'زرت لندن' },
              { word: 'have seen', pron: '/hæv siːn/', example: 'I have seen this film', trans: 'شاهدت هذا الفيلم' },
              { word: 'have eaten', pron: '/hæv ˈiːtn/', example: 'Have you eaten yet?', trans: 'هل أكلت بعد؟' },
              { word: 'have finished', pron: '/hæv ˈfɪnɪʃt/', example: 'I have finished my work', trans: 'أنهيت عملي' },
              { word: 'has gone', pron: '/hæz ɡɔːn/', example: 'She has gone home', trans: 'ذهبت إلى المنزل' }
            ]
          },
          {
            id: 'b1_opinions',
            icon: '💭',
            title: 'التعبير عن الرأي',
            desc: 'جمل للتعبير عن الرأي',
            items: [
              { word: 'I think', pron: '/aɪ θɪŋk/', example: 'I think it is a good idea', trans: 'أعتقد أنها فكرة جيدة' },
              { word: 'In my opinion', pron: '/ɪn maɪ əˈpɪnjən/', example: 'In my opinion, this is best', trans: 'في رأيي، هذا الأفضل' },
              { word: 'I agree', pron: '/aɪ əˈɡriː/', example: 'I agree with you', trans: 'أوافقك الرأي' },
              { word: 'I disagree', pron: '/aɪ ˌdɪsəˈɡriː/', example: 'I disagree with this', trans: 'لا أوافق على هذا' },
              { word: 'I believe', pron: '/aɪ bɪˈliːv/', example: 'I believe in you', trans: 'أؤمن بك' }
            ]
          }
        ]
      },
      B2: {
        name: 'متقدم B2',
        courses: [
          {
            id: 'b2_conditionals',
            icon: '🔀',
            title: 'الجمل الشرطية',
            desc: 'if clauses المتقدمة',
            items: [
              { word: 'If I were', pron: '/ɪf aɪ wɜːr/', example: 'If I were rich, I would travel', trans: 'لو كنت غنياً، لسافرت' },
              { word: 'If you had', pron: '/ɪf juː hæd/', example: 'If you had studied, you would pass', trans: 'لو درست، كنت نجحت' },
              { word: 'Unless', pron: '/ənˈles/', example: 'Unless you hurry, we will be late', trans: 'إن لم تسرع، سنتأخر' },
              { word: 'Provided that', pron: '/prəˈvaɪdɪd ðæt/', example: 'I will come provided that I can', trans: 'سآتي شريطة أن أستطيع' }
            ]
          },
          {
            id: 'b2_passive',
            icon: '🔄',
            title: 'المبني للمجهول',
            desc: 'Passive Voice',
            items: [
              { word: 'was built', pron: '/wʌz bɪlt/', example: 'The house was built in 1990', trans: 'بُني المنزل عام 1990' },
              { word: 'is spoken', pron: '/ɪz ˈspoʊkən/', example: 'English is spoken worldwide', trans: 'الإنجليزية تُتحدث عالمياً' },
              { word: 'has been done', pron: '/hæz biːn dʌn/', example: 'The work has been done', trans: 'تم العمل' },
              { word: 'will be sent', pron: '/wɪl biː sent/', example: 'The email will be sent', trans: 'سيتم إرسال البريد' }
            ]
          },
          {
            id: 'b2_idioms',
            icon: '🎭',
            title: 'التعبيرات الاصطلاحية',
            desc: 'Idioms شائعة',
            items: [
              { word: 'break the ice', pron: '/breɪk ði aɪs/', example: 'He told a joke to break the ice', trans: 'قال نكتة لكسر الجليد' },
              { word: 'piece of cake', pron: '/piːs əv keɪk/', example: 'The test was a piece of cake', trans: 'كان الاختبار سهلاً جداً' },
              { word: 'hit the books', pron: '/hɪt ðə bʊks/', example: 'I need to hit the books', trans: 'أحتاج أن أدرس بجد' },
              { word: 'under the weather', pron: '/ˈʌndər ðə ˈweðər/', example: 'I feel under the weather', trans: 'أشعر بتعب' }
            ]
          }
        ]
      }
    },
    conversations: [
      {
        id: 'conv_restaurant',
        icon: '🍽️',
        title: 'في المطعم',
        lines: [
          { speaker: 'Waiter', text: 'Good evening! Welcome to our restaurant.', trans: 'مساء الخير! مرحباً بك في مطعمنا.' },
          { speaker: 'You', text: 'Thank you. A table for two, please.', trans: 'شكراً. طاولة لشخصين، لو سمحت.' },
          { speaker: 'Waiter', text: 'Of course. This way please.', trans: 'بالطبع. من هنا لو سمحت.' },
          { speaker: 'You', text: 'Can I see the menu?', trans: 'هل يمكنني رؤية القائمة؟' },
          { speaker: 'Waiter', text: 'Here you are. Would you like something to drink?', trans: 'تفضل. هل تريد شيئاً للشرب؟' },
          { speaker: 'You', text: 'Yes, water please.', trans: 'نعم، ماء لو سمحت.' }
        ]
      },
      {
        id: 'conv_airport',
        icon: '✈️',
        title: 'في المطار',
        lines: [
          { speaker: 'Officer', text: 'Your passport, please.', trans: 'جواز سفرك، لو سمحت.' },
          { speaker: 'You', text: 'Here it is.', trans: 'تفضل.' },
          { speaker: 'Officer', text: 'What is the purpose of your visit?', trans: 'ما هو الغرض من زيارتك؟' },
          { speaker: 'You', text: 'Tourism.', trans: 'السياحة.' },
          { speaker: 'Officer', text: 'How long will you stay?', trans: 'كم ستبقى؟' },
          { speaker: 'You', text: 'Two weeks.', trans: 'أسبوعان.' }
        ]
      }
    ]
  },
  fr: {
    name: 'Français',
    flag: '🇫🇷',
    voice: 'fr-FR',
    levels: {
      A1: {
        name: 'مبتدئ A1',
        courses: [
          {
            id: 'a1_alphabet',
            icon: '🔤',
            title: 'الأبجدية الفرنسية',
            desc: 'الحروف مع النطق الصحيح',
            items: [
              { word: 'A', pron: '/a/', example: 'Avion', trans: 'طائرة' },
              { word: 'B', pron: '/be/', example: 'Ballon', trans: 'كرة' },
              { word: 'C', pron: '/se/', example: 'Chat', trans: 'قط' },
              { word: 'D', pron: '/de/', example: 'Dauphin', trans: 'دلفين' },
              { word: 'E', pron: '/ə/', example: 'École', trans: 'مدرسة' },
              { word: 'F', pron: '/ɛf/', example: 'Fleur', trans: 'زهرة' },
              { word: 'G', pron: '/ʒe/', example: 'Gâteau', trans: 'كعكة' },
              { word: 'H', pron: '/aʃ/', example: 'Hôtel', trans: 'فندق' },
              { word: 'I', pron: '/i/', example: 'Île', trans: 'جزيرة' },
              { word: 'J', pron: '/ʒi/', example: 'Jardin', trans: 'حديقة' },
              { word: 'K', pron: '/ka/', example: 'Kiwi', trans: 'كيوي' },
              { word: 'L', pron: '/ɛl/', example: 'Lune', trans: 'قمر' },
              { word: 'M', pron: '/ɛm/', example: 'Maison', trans: 'منزل' },
              { word: 'N', pron: '/ɛn/', example: 'Nuage', trans: 'سحابة' },
              { word: 'O', pron: '/o/', example: 'Orange', trans: 'برتقال' },
              { word: 'P', pron: '/pe/', example: 'Pomme', trans: 'تفاحة' },
              { word: 'Q', pron: '/ky/', example: 'Quatre', trans: 'أربعة' },
              { word: 'R', pron: '/ɛʁ/', example: 'Rose', trans: 'وردة' },
              { word: 'S', pron: '/ɛs/', example: 'Soleil', trans: 'شمس' },
              { word: 'T', pron: '/te/', example: 'Table', trans: 'طاولة' },
              { word: 'U', pron: '/y/', example: 'Univers', trans: 'كون' },
              { word: 'V', pron: '/ve/', example: 'Voiture', trans: 'سيارة' },
              { word: 'W', pron: '/dubləve/', example: 'Wagon', trans: 'عربة' },
              { word: 'X', pron: '/iks/', example: 'Xylophone', trans: 'زيلوفون' },
              { word: 'Y', pron: '/iɡʁɛk/', example: 'Yaourt', trans: 'زبادي' },
              { word: 'Z', pron: '/zɛd/', example: 'Zèbre', trans: 'حمار وحشي' }
            ]
          },
          {
            id: 'a1_numbers',
            icon: '🔢',
            title: 'الأرقام 1-20',
            desc: 'الأرقام الفرنسية',
            items: [
              { word: 'Un', pron: '/œ̃/', example: 'Un livre', trans: 'كتاب واحد' },
              { word: 'Deux', pron: '/dø/', example: 'Deux chats', trans: 'قطتان' },
              { word: 'Trois', pron: '/tʁwa/', example: 'Trois pommes', trans: 'ثلاث تفاحات' },
              { word: 'Quatre', pron: '/katʁ/', example: 'Quatre saisons', trans: 'أربعة فصول' },
              { word: 'Cinq', pron: '/sɛ̃k/', example: 'Cinq doigts', trans: 'خمسة أصابع' },
              { word: 'Six', pron: '/sis/', example: 'Six œufs', trans: 'ست بيضات' },
              { word: 'Sept', pron: '/sɛt/', example: 'Sept jours', trans: 'سبعة أيام' },
              { word: 'Huit', pron: '/ɥit/', example: 'Huit heures', trans: 'ثماني ساعات' },
              { word: 'Neuf', pron: '/nœf/', example: 'Neuf étudiants', trans: 'تسعة طلاب' },
              { word: 'Dix', pron: '/dis/', example: 'Dix euros', trans: 'عشرة يورو' }
            ]
          },
          {
            id: 'a1_greetings',
            icon: '👋',
            title: 'التحيات',
            desc: 'التحيات الفرنسية',
            items: [
              { word: 'Bonjour', pron: '/bɔ̃ʒuʁ/', example: 'Bonjour! Comment ça va?', trans: 'مرحباً! كيف حالك؟' },
              { word: 'Bonsoir', pron: '/bɔ̃swaʁ/', example: 'Bonsoir, madame.', trans: 'مساء الخير سيدتي.' },
              { word: 'Bonne nuit', pron: '/bɔn nɥi/', example: 'Bonne nuit, papa.', trans: 'تصبح على خير أبي.' },
              { word: 'Au revoir', pron: '/o ʁəvwaʁ/', example: 'Au revoir! À bientôt.', trans: 'وداعاً! أراك قريباً.' },
              { word: 'Merci', pron: '/mɛʁsi/', example: 'Merci beaucoup!', trans: 'شكراً جزيلاً!' },
              { word: 'S\'il vous plaît', pron: '/sil vu plɛ/', example: 'De l\'eau, s\'il vous plaît.', trans: 'ماء، لو سمحت.' },
              { word: 'Pardon', pron: '/paʁdɔ̃/', example: 'Pardon, où est la gare?', trans: 'عفواً، أين المحطة؟' },
              { word: 'Salut', pron: '/saly/', example: 'Salut, ça va?', trans: 'أهلاً، كيف حالك؟' }
            ]
          },
          {
            id: 'a1_colors',
            icon: '🎨',
            title: 'الألوان',
            desc: 'الألوان الأساسية',
            items: [
              { word: 'Rouge', pron: '/ʁuʒ/', example: 'La rose est rouge', trans: 'الوردة حمراء' },
              { word: 'Bleu', pron: '/blø/', example: 'Le ciel est bleu', trans: 'السماء زرقاء' },
              { word: 'Vert', pron: '/vɛʁ/', example: 'L\'herbe est verte', trans: 'العشب أخضر' },
              { word: 'Jaune', pron: '/ʒon/', example: 'Le soleil est jaune', trans: 'الشمس صفراء' },
              { word: 'Orange', pron: '/ɔʁɑ̃ʒ/', example: 'L\'orange est orange', trans: 'البرتقال برتقالي' },
              { word: 'Violet', pron: '/vjɔlɛ/', example: 'La fleur est violette', trans: 'الزهرة بنفسجية' },
              { word: 'Rose', pron: '/ʁoz/', example: 'La robe est rose', trans: 'الفستان وردي' },
              { word: 'Marron', pron: '/maʁɔ̃/', example: 'L\'ours est marron', trans: 'الدب بني' },
              { word: 'Noir', pron: '/nwaʁ/', example: 'La voiture est noire', trans: 'السيارة سوداء' },
              { word: 'Blanc', pron: '/blɑ̃/', example: 'La neige est blanche', trans: 'الثلج أبيض' }
            ]
          },
          {
            id: 'a1_family',
            icon: '👨‍👩‍👧',
            title: 'العائلة',
            desc: 'أفراد العائلة',
            items: [
              { word: 'Père', pron: '/pɛʁ/', example: 'Mon père travaille ici', trans: 'أبي يعمل هنا' },
              { word: 'Mère', pron: '/mɛʁ/', example: 'Ma mère est médecin', trans: 'أمي طبيبة' },
              { word: 'Frère', pron: '/fʁɛʁ/', example: 'J\'ai un frère', trans: 'لدي أخ واحد' },
              { word: 'Sœur', pron: '/sœʁ/', example: 'Ma sœur est jeune', trans: 'أختي صغيرة' },
              { word: 'Fils', pron: '/fis/', example: 'C\'est mon fils', trans: 'هذا ابني' },
              { word: 'Fille', pron: '/fij/', example: 'C\'est ma fille', trans: 'هذه ابنتي' },
              { word: 'Grand-père', pron: '/ɡʁɑ̃pɛʁ/', example: 'Mon grand-père est vieux', trans: 'جدي كبير في السن' },
              { word: 'Grand-mère', pron: '/ɡʁɑ̃mɛʁ/', example: 'Ma grand-mère cuisine bien', trans: 'جدتي تطبخ جيداً' },
              { word: 'Famille', pron: '/famij/', example: 'J\'aime ma famille', trans: 'أحب عائلتي' },
              { word: 'Bébé', pron: '/bebe/', example: 'Le bébé dort', trans: 'الطفل نائم' }
            ]
          },
          {
            id: 'a1_verbs',
            icon: '⚡',
            title: 'الأفعال الأساسية',
            desc: 'أهم الأفعال الفرنسية',
            items: [
              { word: 'être', pron: '/ɛtʁ/', example: 'Je suis heureux', trans: 'أنا سعيد' },
              { word: 'avoir', pron: '/avwaʁ/', example: 'J\'ai une voiture', trans: 'لدي سيارة' },
              { word: 'aller', pron: '/ale/', example: 'Je vais à l\'école', trans: 'أذهب إلى المدرسة' },
              { word: 'venir', pron: '/vəniʁ/', example: 'Viens ici s\'il te plaît', trans: 'تعال هنا لو سمحت' },
              { word: 'manger', pron: '/mɑ̃ʒe/', example: 'Je mange du pain', trans: 'آكل الخبز' },
              { word: 'boire', pron: '/bwaʁ/', example: 'Je bois de l\'eau', trans: 'أشرب الماء' },
              { word: 'voir', pron: '/vwaʁ/', example: 'Je vois un oiseau', trans: 'أرى طائراً' },
              { word: 'parler', pron: '/paʁle/', example: 'Je parle français', trans: 'أتحدث الفرنسية' },
              { word: 'lire', pron: '/liʁ/', example: 'Je lis un livre', trans: 'أقرأ كتاباً' },
              { word: 'écrire', pron: '/ekʁiʁ/', example: 'J\'écris une lettre', trans: 'أكتب رسالة' }
            ]
          }
        ]
      },
      A2: {
        name: 'ما قبل المتوسط A2',
        courses: [
          {
            id: 'a2_daily',
            icon: '⏰',
            title: 'الروتين اليومي',
            desc: 'أنشطة يومية',
            items: [
              { word: 'se lever', pron: '/sə ləve/', example: 'Je me lève à 7h', trans: 'أستيقظ في السابعة' },
              { word: 'se laver', pron: '/sə lave/', example: 'Je me lave le matin', trans: 'أستحم في الصباح' },
              { word: 'prendre le petit-déjeuner', pron: '/pʁɑ̃dʁ lə pəti deʒøne/', example: 'Nous prenons le petit-déjeuner ensemble', trans: 'نتناول الإفطار معاً' },
              { word: 'aller au travail', pron: '/ale o tʁavaj/', example: 'Elle va au travail en bus', trans: 'تذهب إلى العمل بالحافلة' },
              { word: 'déjeuner', pron: '/deʒøne/', example: 'Je déjeune à midi', trans: 'أتناول الغداء عند الظهر' },
              { word: 'rentrer', pron: '/ʁɑ̃tʁe/', example: 'Il rentre à 18h', trans: 'يعود في السادسة' },
              { word: 'regarder la télé', pron: '/ʁəɡaʁde la tele/', example: 'Nous regardons la télé le soir', trans: 'نشاهد التلفاز مساءً' },
              { word: 'se coucher', pron: '/sə kuʃe/', example: 'Je me couche à 23h', trans: 'أنام في الحادية عشرة' }
            ]
          },
          {
            id: 'a2_restaurant',
            icon: '🍽️',
            title: 'في المطعم',
            desc: 'مفردات المطعم',
            items: [
              { word: 'menu', pron: '/məny/', example: 'Puis-je voir le menu?', trans: 'هل يمكنني رؤية القائمة؟' },
              { word: 'commander', pron: '/kɔmɑ̃de/', example: 'Je voudrais commander', trans: 'أريد أن أطلب' },
              { word: 'serveur', pron: '/sɛʁvœʁ/', example: 'Le serveur est sympa', trans: 'النادل لطيف' },
              { word: 'addition', pron: '/adisjɔ̃/', example: 'L\'addition s\'il vous plaît', trans: 'الفاتورة لو سمحت' },
              { word: 'délicieux', pron: '/delisjø/', example: 'C\'est délicieux', trans: 'هذا لذيذ' },
              { word: 'épicé', pron: '/epise/', example: 'Ce plat est épicé', trans: 'هذا الطبق حار' }
            ]
          },
          {
            id: 'a2_travel',
            icon: '✈️',
            title: 'السفر',
            desc: 'مفردات المطار',
            items: [
              { word: 'aéroport', pron: '/aeʁɔpɔʁ/', example: 'L\'aéroport est loin', trans: 'المطار بعيد' },
              { word: 'billet', pron: '/bijɛ/', example: 'J\'ai acheté un billet', trans: 'اشتريت تذكرة' },
              { word: 'passeport', pron: '/paspɔʁ/', example: 'Montrez votre passeport', trans: 'أرني جواز سفرك' },
              { word: 'bagages', pron: '/baɡaʒ/', example: 'Mes bagages sont lourds', trans: 'أمتعتي ثقيلة' },
              { word: 'vol', pron: '/vɔl/', example: 'Le vol est retardé', trans: 'الرحلة متأخرة' },
              { word: 'arriver', pron: '/aʁive/', example: 'Nous arrivons à 21h', trans: 'نصل في التاسعة' }
            ]
          }
        ]
      },
      B1: {
        name: 'متوسط B1',
        courses: [
          {
            id: 'b1_passe_compose',
            icon: '📖',
            title: 'الماضي المركب',
            desc: 'Passé Composé',
            items: [
              { word: 'je suis allé', pron: '/ʒə sɥiz ale/', example: 'Je suis allé à Paris', trans: 'ذهبت إلى باريس' },
              { word: 'j\'ai vu', pron: '/ʒe vy/', example: 'J\'ai vu un film', trans: 'شاهدت فيلماً' },
              { word: 'j\'ai mangé', pron: '/ʒe mɑ̃ʒe/', example: 'J\'ai mangé une pizza', trans: 'أكلت بيتزا' },
              { word: 'j\'ai acheté', pron: '/ʒe aʃte/', example: 'J\'ai acheté une voiture', trans: 'اشتريت سيارة' },
              { word: 'j\'ai fait', pron: '/ʒe fɛ/', example: 'J\'ai fait mes devoirs', trans: 'أنجزت واجباتي' }
            ]
          },
          {
            id: 'b1_imparfait',
            icon: '🕰️',
            title: 'الماضي المستمر',
            desc: 'Imparfait',
            items: [
              { word: 'j\'étais', pron: '/ʒetɛ/', example: 'J\'étais à la maison', trans: 'كنت في المنزل' },
              { word: 'j\'avais', pron: '/ʒavɛ/', example: 'J\'avais un chat', trans: 'كان لدي قط' },
              { word: 'je parlais', pron: '/ʒə paʁlɛ/', example: 'Je parlais avec lui', trans: 'كنت أتحدث معه' },
              { word: 'il faisait', pron: '/il fəzɛ/', example: 'Il faisait beau', trans: 'كان الجو جميلاً' }
            ]
          }
        ]
      },
      B2: {
        name: 'متقدم B2',
        courses: [
          {
            id: 'b2_subjonctif',
            icon: '🔀',
            title: 'صيغة الشرط',
            desc: 'Subjonctif',
            items: [
              { word: 'que je sois', pron: '/kə ʒə swa/', example: 'Il faut que je sois prêt', trans: 'يجب أن أكون مستعداً' },
              { word: 'que tu aies', pron: '/kə ty ɛ/', example: 'Je veux que tu aies confiance', trans: 'أريد أن تثق' },
              { word: 'qu\'il fasse', pron: '/kil fas/', example: 'Il faut qu\'il fasse attention', trans: 'يجب أن ينتبه' }
            ]
          },
          {
            id: 'b2_connecteurs',
            icon: '🔗',
            title: 'أدوات الربط',
            desc: 'Connecteurs logiques',
            items: [
              { word: 'cependant', pron: '/səpɑ̃dɑ̃/', example: 'Cependant, je pense autrement', trans: 'مع ذلك، أعتقد خلاف ذلك' },
              { word: 'néanmoins', pron: '/neɑ̃mwɛ̃/', example: 'Néanmoins, c\'est vrai', trans: 'رغم ذلك، هذا صحيح' },
              { word: 'par conséquent', pron: '/paʁ kɔ̃sekɑ̃/', example: 'Par conséquent, nous partons', trans: 'نتيجة لذلك، نغادر' },
              { word: 'en revanche', pron: '/ɑ̃ ʁəvɑ̃ʃ/', example: 'En revanche, je refuse', trans: 'في المقابل، أرفض' }
            ]
          }
        ]
      }
    },
    conversations: [
      {
        id: 'conv_boulangerie',
        icon: '🥖',
        title: 'في المخبز',
        lines: [
          { speaker: 'Vendeur', text: 'Bonjour! Que voulez-vous?', trans: 'مرحباً! ماذا تريد؟' },
          { speaker: 'Vous', text: 'Bonjour! Je voudrais une baguette.', trans: 'مرحباً! أريد خبزاً فرنسياً.' },
          { speaker: 'Vendeur', text: 'Une baguette, c\'est tout?', trans: 'خبز واحد، هذا كل شيء؟' },
          { speaker: 'Vous', text: 'Oui, c\'est tout. Combien ça coûte?', trans: 'نعم، هذا كل شيء. كم الثمن؟' },
          { speaker: 'Vendeur', text: 'Un euro vingt.', trans: 'يورو وعشرون سنتاً.' },
          { speaker: 'Vous', text: 'Voilà. Merci!', trans: 'تفضل. شكراً!' }
        ]
      }
    ]
  }
};

// ============ BADGES - الشارات والإنجازات ============
const BADGES = [
  { id: 'first_step', icon: '🎯', name: 'الخطوة الأولى', desc: 'أكمل أول درس', condition: s => s.lessonsCompleted >= 1 },
  { id: 'alphabet_master', icon: '🔤', name: 'سيد الحروف', desc: 'أكمل درس الحروف', condition: s => s.completedCourses.includes('a1_alphabet') },
  { id: 'streak_3', icon: '🔥', name: '3 أيام متتالية', desc: 'حافظ على سلسلة 3 أيام', condition: s => s.streak >= 3 },
  { id: 'streak_7', icon: '🔥🔥', name: 'أسبوع كامل', desc: 'سلسلة 7 أيام', condition: s => s.streak >= 7 },
  { id: 'streak_30', icon: '🔥🔥🔥', name: 'شهر كامل', desc: 'سلسلة 30 يوماً', condition: s => s.streak >= 30 },
  { id: 'xp_100', icon: '⭐', name: '100 نقطة', desc: 'اجمع 100 XP', condition: s => s.xp >= 100 },
  { id: 'xp_500', icon: '🌟', name: '500 نقطة', desc: 'اجمع 500 XP', condition: s => s.xp >= 500 },
  { id: 'xp_1000', icon: '💫', name: '1000 نقطة', desc: 'اجمع 1000 XP', condition: s => s.xp >= 1000 },
  { id: 'perfect_quiz', icon: '💯', name: 'الدرجة الكاملة', desc: 'أكمل اختباراً بدون أخطاء', condition: s => s.perfectQuizzes >= 1 },
  { id: 'level_5', icon: '🏆', name: 'المستوى 5', desc: 'وصل للمستوى الخامس', condition: s => s.level >= 5 },
  { id: 'bilingual', icon: '🌍', name: 'متعدد اللغات', desc: 'تعلم في اللغتين', condition: s => s.langsStudied.size >= 2 },
  { id: 'speaker', icon: '🎤', name: 'المتحدث', desc: 'استخدم ميزة النطق 50 مرة', condition: s => s.speechCount >= 50 }
];

// ============ STATE - حالة التطبيق ============
const State = {
  lang: 'en',
  currentView: 'home',
  currentCourse: null,
  currentLessonIndex: 0,
  currentQuizIndex: 0,
  quizQuestions: [],
  quizScore: 0,
  quizMode: null, // 'quiz' | 'matching' | 'listening' | 'speaking'
  
  // بيانات المستخدم
  xp: 0,
  gems: 0,
  hearts: 5,
  maxHearts: 5,
  streak: 0,
  level: 1,
  lessonsCompleted: 0,
  perfectQuizzes: 0,
  speechCount: 0,
  
  completedCourses: [],
  completedItems: {}, // { courseId: [indices] }
  dailyGoal: 50,
  todayXP: 0,
  dailyHistory: {}, // { 'YYYY-MM-DD': xp }
  langsStudied: new Set(),
  earnedBadges: [],
  
  settings: {
    theme: 'light',
    sound: true,
    hapticFeedback: true,
    dailyGoalXP: 50
  }
};
// ============ STORAGE - حفظ واسترجاع ============
const Storage = {
  KEY: 'linguapro_v2',
  
  save() {
    const data = {
      lang: State.lang,
      xp: State.xp,
      gems: State.gems,
      hearts: State.hearts,
      streak: State.streak,
      level: State.level,
      lessonsCompleted: State.lessonsCompleted,
      perfectQuizzes: State.perfectQuizzes,
      speechCount: State.speechCount,
      completedCourses: State.completedCourses,
      completedItems: State.completedItems,
      dailyHistory: State.dailyHistory,
      todayXP: State.todayXP,
      langsStudied: Array.from(State.langsStudied),
      earnedBadges: State.earnedBadges,
      settings: State.settings,
      lastVisit: new Date().toDateString()
    };
    try {
      localStorage.setItem(this.KEY, JSON.stringify(data));
    } catch(e) { console.warn('Storage error:', e); }
  },
  
  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return false;
      const d = JSON.parse(raw);
      
      Object.assign(State, {
        lang: d.lang || 'en',
        xp: d.xp || 0,
        gems: d.gems || 0,
        hearts: d.hearts ?? 5,
        streak: d.streak || 0,
        level: d.level || 1,
        lessonsCompleted: d.lessonsCompleted || 0,
        perfectQuizzes: d.perfectQuizzes || 0,
        speechCount: d.speechCount || 0,
        completedCourses: d.completedCourses || [],
        completedItems: d.completedItems || {},
        dailyHistory: d.dailyHistory || {},
        todayXP: d.todayXP || 0,
        earnedBadges: d.earnedBadges || [],
        settings: { ...State.settings, ...(d.settings || {}) }
      });
      
      State.langsStudied = new Set(d.langsStudied || []);
      
      // فحص السلسلة اليومية
      const today = new Date().toDateString();
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      if (d.lastVisit !== today) {
        State.todayXP = 0;
        if (d.lastVisit === yesterday) {
          State.streak = (d.streak || 0) + 1;
        } else {
          State.streak = 1;
        }
      }
      
      // استعادة القلوب بمرور الوقت
      const heartsRegen = localStorage.getItem('linguapro_hearts_regen');
      if (heartsRegen) {
        const elapsed = Date.now() - parseInt(heartsRegen);
        const regenCount = Math.floor(elapsed / (30 * 60 * 1000)); // كل 30 دقيقة
        if (regenCount > 0 && State.hearts < State.maxHearts) {
          State.hearts = Math.min(State.maxHearts, State.hearts + regenCount);
        }
      }
      
      return true;
    } catch(e) {
      console.warn('Load error:', e);
      return false;
    }
  }
};

// ============ SPEECH - محرك النطق ============
const Speech = {
  voices: [],
  supported: 'speechSynthesis' in window,
  recognitionSupported: 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window,
  
  init() {
    if (!this.supported) return;
    const loadVoices = () => {
      this.voices = window.speechSynthesis.getVoices();
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  },
  
  speak(text, lang = State.lang, rate = 0.85, onEnd) {
    if (!this.supported || !State.settings.sound) {
      if (onEnd) onEnd();
      return;
    }
    window.speechSynthesis.cancel();
    
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === 'en' ? 'en-US' : 'fr-FR';
    u.rate = rate;
    u.pitch = 1;
    u.volume = 1;
    
    const targetLang = lang === 'en' ? 'en' : 'fr';
    const voice = this.voices.find(v => v.lang.startsWith(targetLang));
    if (voice) u.voice = voice;
    
    u.onend = () => { if (onEnd) onEnd(); };
    u.onerror = () => { if (onEnd) onEnd(); };
    
    window.speechSynthesis.speak(u);
    State.speechCount++;
    Storage.save();
  },
  
  stop() {
    if (this.supported) window.speechSynthesis.cancel();
  },
  
  recognize(lang, onResult, onError) {
    if (!this.recognitionSupported) {
      if (onError) onError('Speech recognition not supported');
      return null;
    }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SR();
    recognition.lang = lang === 'en' ? 'en-US' : 'fr-FR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.continuous = false;
    
    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      const confidence = e.results[0][0].confidence;
      if (onResult) onResult(transcript, confidence);
    };
    recognition.onerror = (e) => {
      if (onError) onError(e.error);
    };
    
    recognition.start();
    return recognition;
  }
};

// ============ UI HELPERS ============
const UI = {
  toast(msg, duration = 2200, type = 'info') {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'toast show';
    if (type === 'success') t.style.background = 'var(--success)';
    else if (type === 'error') t.style.background = 'var(--danger)';
    else if (type === 'warning') t.style.background = 'var(--warning)';
    else t.style.background = 'var(--text)';
    t.style.color = 'white';
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), duration);
  },
  
  confetti() {
    const container = document.getElementById('confetti');
    const colors = ['#6366f1', '#f59e0b', '#ec4899', '#10b981', '#ef4444', '#3b82f6'];
    for (let i = 0; i < 50; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = Math.random() * 0.5 + 's';
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
      container.appendChild(piece);
      setTimeout(() => piece.remove(), 3500);
    }
  },
  
  haptic() {
    if (State.settings.hapticFeedback && navigator.vibrate) {
      navigator.vibrate(15);
    }
  },
  
  updateStats() {
    document.getElementById('streakCount').textContent = State.streak;
    document.getElementById('xpCount').textContent = State.xp;
    document.getElementById('gemCount').textContent = State.gems;
    document.getElementById('heartCount').textContent = State.hearts;
    
    // نسبة التقدم اليومي
    const goalPercent = Math.min(100, (State.todayXP / State.dailyGoal) * 100);
    const gp = document.getElementById('globalProgress');
    if (gp) gp.style.width = goalPercent + '%';
  },
  
  addXP(amount, reason = '') {
    State.xp += amount;
    State.todayXP += amount;
    
    // تسجيل في السجل اليومي
    const today = new Date().toISOString().split('T')[0];
    State.dailyHistory[today] = (State.dailyHistory[today] || 0) + amount;
    
    const newLevel = Math.floor(State.xp / 100) + 1;
    if (newLevel > State.level) {
      State.level = newLevel;
      this.confetti();
      this.toast(`🎉 مبروك! المستوى ${newLevel}`, 3000, 'success');
    }
    
    this.updateStats();
    Storage.save();
    checkBadges();
  },
  
  addGems(n) {
    State.gems += n;
    this.updateStats();
    Storage.save();
  },
  
  loseHeart() {
    if (State.hearts > 0) {
      State.hearts--;
      localStorage.setItem('linguapro_hearts_regen', Date.now().toString());
      this.updateStats();
      Storage.save();
    }
    if (State.hearts === 0) {
      this.toast('💔 نفدت القلوب! انتظر 30 دقيقة لاستعادتها', 3000, 'warning');
    }
  },
  
  openModal(content) {
    document.getElementById('modalContent').innerHTML = content;
    document.getElementById('modalOverlay').classList.remove('hidden');
  },
  
  closeModal() {
    document.getElementById('modalOverlay').classList.add('hidden');
  }
};

// ============ BADGES CHECK ============
function checkBadges() {
  BADGES.forEach(badge => {
    if (!State.earnedBadges.includes(badge.id) && badge.condition(State)) {
      State.earnedBadges.push(badge.id);
      UI.toast(`🏅 شارة جديدة: ${badge.name}!`, 3000, 'success');
      UI.confetti();
      UI.addGems(5);
    }
  });
  Storage.save();
}

// ============ HELPERS ============
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[m]));
}

function getCurrentLevel() {
  return DB[State.lang].levels;
}

function findCourse(courseId) {
  const levels = DB[State.lang].levels;
  for (const levelKey in levels) {
    const course = levels[levelKey].courses.find(c => c.id === courseId);
    if (course) return { course, level: levelKey };
  }
  return null;
}