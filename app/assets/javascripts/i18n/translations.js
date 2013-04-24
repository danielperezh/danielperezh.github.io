var I18n = I18n || {};
I18n.translations = {"en":{"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M","tiny":{},"posted":"Posted on the %Y-%m-%d at %H:%M."},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" and ","last_word_connector":", and "}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"is not included in the list","exclusion":"is reserved","invalid":"is invalid","confirmation":"doesn't match confirmation","accepted":"must be accepted","empty":"can't be empty","blank":"can't be blank","too_long":"is too long (maximum is %{count} characters)","too_short":"is too short (minimum is %{count} characters)","wrong_length":"is the wrong length (should be %{count} characters)","not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","odd":"must be odd","even":"must be even","already_confirmed":"was already confirmed, please try signing in","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one","expired":"has expired, please request a new one","not_found":"not found","not_locked":"was not locked","not_saved":{"one":"1 error prohibited this %{resource} from being saved:","other":"%{count} errors prohibited this %{resource} from being saved:"}}},"activerecord":{"errors":{"messages":{"taken":"has already been taken","record_invalid":"Validation failed: %{errors}"}}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":""}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"},"button":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"}},"will_paginate":{"previous_label":"&#8592; Previous","next_label":"Next &#8594;","page_gap":"&hellip;","page_entries_info":{"single_page":{"zero":"No %{model} found","one":"Displaying 1 %{model}","other":"Displaying all %{count} %{model}"},"single_page_html":{"zero":"No %{model} found","one":"Displaying <b>1</b> %{model}","other":"Displaying <b>all&nbsp;%{count}</b> %{model}"},"multi_page":"Displaying %{model} %{from} - %{to} of %{count} in total","multi_page_html":"Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> in total"}},"devise":{"confirmations":{"confirmed":"Your account was successfully confirmed. You are now signed in.","send_instructions":"You will receive an email with instructions about how to confirm your account in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive an email with instructions about how to confirm your account in a few minutes."},"failure":{"already_authenticated":"You are already signed in.","inactive":"Your account was not activated yet.","invalid":"Invalid email or password.","invalid_token":"Invalid authentication token.","locked":"Your account is locked.","not_found_in_database":"Invalid email or password.","timeout":"Your session expired, please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing.","unconfirmed":"You have to confirm your account before continuing."},"mailer":{"confirmation_instructions":{"subject":"Confirmation instructions"},"reset_password_instructions":{"subject":"Reset password instructions"},"unlock_instructions":{"subject":"Unlock Instructions"}},"omniauth_callbacks":{"failure":"Could not authenticate you from %{kind} because \"%{reason}\".","success":"Successfully authenticated from %{kind} account."},"passwords":{"no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.","send_instructions":"You will receive an email with instructions about how to reset your password in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.","updated":"Your password was changed successfully. You are now signed in.","updated_not_active":"Your password was changed successfully."},"registrations":{"destroyed":"Bye! Your account was successfully cancelled. We hope to see you again soon.","signed_up":"Welcome! You have signed up successfully.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please open the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.","updated":"You updated your account successfully."},"sessions":{"signed_in":"Signed in successfully.","signed_out":"Signed out successfully."},"unlocks":{"send_instructions":"You will receive an email with instructions about how to unlock your account in a few minutes.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions about how to unlock it in a few minutes.","unlocked":"Your account has been unlocked successfully. Please sign in to continue."}},"common":{"language":"Language","recent_posts":"Recent posts","recent_tweets":"Recent Tweets","to_now":"%{time} ago","about":"About Me","show_profile":"Full Biography","archive":"Archives","english":"English","japanese":"Japanese","back":"Back","account":"Account"},"user":{"sign_in":"Sign in","email":"Email","password":"Password","edit":"Edit profile","profile":"Profile","full_profile":"Full Biography","small_picture":"Small picture","large_picture":"Large picture","first_name":"First name","last_name":"Last name","nickname":"Nickname"},"posts":{"new":"New","new_long":"New Post","title":"Title","content":"Content","tags":"Tags","add_tag":"Add a tag","remove_tag":"Remove this tag","create":"Create","save":"Save","category":"Posted in %{tags}","edit":"Edit","edit_long":"Editing Post","locale_not_available":"Sorry but this post does not seem to be available in English.","continue_reading":"Continue reading","delete":"Delete","confirm_delete":"Are you sure ?","main_picture":"Main picture","friendly_id":"Friendly ID"},"comments":{"write":"Write a comment","author":"Name","email":"Gravatar email (not displayed)","post":"Post","number":{"zero":"No comments","one":"1 Comment","other":"%{count} Comments"}},"picture":{"add":"Add picture","remove":"Remove picture","name":"File ID","file":"File","options":"Options"},"sessions":{"login":"Login","logout":"Logout"}},"ja":{"common":{"language":"言語","recent_posts":"最近の記事","recent_tweets":"最近のつぶやき","to_now":"%{time}前","about":"プロフィール","show_profile":"プロフィールを見る","archive":"アーカイブ","english":"英語","japanese":"日本語","back":"戻る","account":"アカウント"},"sessions":{"sign_in":"サインイン","login":"ログイン","logout":"ログアウト"},"posts":{"new":"作成","new_long":"記事新作成","title":"タイトル","content":"内容","tags":"タグ","add_tag":"タグを追加","remove_tag":"タグを削除","create":"作成","save":"保存","edit":"編集","edit_long":"記事の編集中","category":"%{tags}で投稿","locale_not_available":"申し訳ありませんが、この記事は日本語にまだ訳されていないようです。","continue_reading":"続きを読む","delete":"削除","confirm_delete":"本当に削除しますか。","main_picture":"メイン画像","friendly_id":"Friendly ID"},"comments":{"write":"コメントを書く","author":"名前","email":"Gravatarメール (非表示)","post":"投稿","number":{"zero":"コメントがありません。","one":"コメント1件","other":"コメント%{count}件"}},"user":{"email":"メール","password":"パスワード","edit":"プロフィール編集","profile":"プロフィール","full_profile":"プロフィール(長い版)","small_picture":"画像(小)","large_picture":"画像(大)","first_name":"名前","last_name":"苗字","nickname":"ニックネーム"},"picture":{"add":"画像を追加","remove":"画像を削除","name":"ファイルID","file":"ファイル","options":"オプション"},"will_paginate":{"previous_label":"&#8592; 前","next_label":"次 &#8594;","page_gap":"&hellip;"},"time":{"formats":{"tiny":"%B%e日","posted":"%Y年%B%e日 %H時%M分に投稿","default":"%Y/%m/%d %H:%M:%S","long":"%Y年%m月%d日(%a) %H時%M分%S秒 %z","short":"%y/%m/%d %H:%M"},"am":"午前","pm":"午後"},"date":{"abbr_day_names":["日","月","火","水","木","金","土"],"abbr_month_names":[null,"1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"day_names":["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],"formats":{"default":"%Y/%m/%d","long":"%Y年%m月%d日(%a)","short":"%m/%d"},"month_names":[null,"1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"約1時間","other":"約%{count}時間"},"about_x_months":{"one":"約1ヶ月","other":"約%{count}ヶ月"},"about_x_years":{"one":"約1年","other":"約%{count}年"},"almost_x_years":{"one":"1年弱","other":"%{count}年弱"},"half_a_minute":"30秒前後","less_than_x_minutes":{"one":"1分以内","other":"%{count}分以内"},"less_than_x_seconds":{"one":"1秒以内","other":"%{count}秒以内"},"over_x_years":{"one":"1年以上","other":"%{count}年以上"},"x_days":{"one":"1日","other":"%{count}日"},"x_minutes":{"one":"1分","other":"%{count}分"},"x_months":{"one":"1ヶ月","other":"%{count}ヶ月"},"x_seconds":{"one":"1秒","other":"%{count}秒"}},"prompts":{"day":"日","hour":"時","minute":"分","month":"月","second":"秒","year":"年"}},"errors":{"format":"%{attribute}%{message}","messages":{"accepted":"を受諾してください。","blank":"を入力してください。","confirmation":"と確認の入力が一致しません。","empty":"を入力してください。","equal_to":"は%{count}にしてください。","even":"は偶数にしてください。","exclusion":"は予約されています。","greater_than":"は%{count}より大きい値にしてください。","greater_than_or_equal_to":"は%{count}以上の値にしてください。","inclusion":"は一覧にありません。","invalid":"は不正な値です。","less_than":"は%{count}より小さい値にしてください。","less_than_or_equal_to":"は%{count}以下の値にしてください。","not_a_number":"は数値で入力してください。","not_an_integer":"は整数で入力してください。","odd":"は奇数にしてください。","record_invalid":"バリデーションに失敗しました。 %{errors}","taken":"はすでに存在します。","too_long":"は%{count}文字以内で入力してください。","too_short":"は%{count}文字以上で入力してください。","wrong_length":"は%{count}文字で入力してください。"},"template":{"body":"次の項目を確認してください。","header":{"one":"%{model}にエラーが発生しました。","other":"%{model}に%{count}個のエラーが発生しました。"}}},"helpers":{"select":{"prompt":"選択してください。"},"submit":{"create":"登録する","submit":"保存する","update":"更新する"}},"number":{"currency":{"format":{"delimiter":",","format":"%n%u","precision":0,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"円"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"十億","million":"百万","quadrillion":"千兆","thousand":"千","trillion":"兆","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n%u","units":{"byte":"バイト","gb":"ギガバイト","kb":"キロバイト","mb":"メガバイト","tb":"テラバイト"}}},"percentage":{"format":{"delimiter":""}},"precision":{"format":{"delimiter":""}}},"support":{"array":{"last_word_connector":"と","two_words_connector":"と","words_connector":"と"}},"activemodel":{"errors":{"format":"%{attribute}%{message}","messages":{"accepted":"を受諾してください。","blank":"を入力してください。","confirmation":"と確認の入力が一致しません。","empty":"を入力してください。","equal_to":"は%{count}にしてください。","even":"は偶数にしてください。","exclusion":"は予約されています。","greater_than":"は%{count}より大きい値にしてください。","greater_than_or_equal_to":"は%{count}以上の値にしてください。","inclusion":"は一覧にありません。","invalid":"は不正な値です。","less_than":"は%{count}より小さい値にしてください。","less_than_or_equal_to":"は%{count}以下の値にしてください。","not_a_number":"は数値で入力してください。","not_an_integer":"は整数で入力してください。","odd":"は奇数にしてください。","record_invalid":"バリデーションに失敗しました。 %{errors}","taken":"はすでに存在します。","too_long":"は%{count}文字以内で入力してください。","too_short":"は%{count}文字以上で入力してください。","wrong_length":"は%{count}文字で入力してください。"},"template":{"body":"次の項目を確認してください。","header":{"one":"%{model}にエラーが発生しました。","other":"%{model}に%{count}個のエラーが発生しました。"}}}},"activerecord":{"errors":{"format":"%{attribute}%{message}","messages":{"accepted":"を受諾してください。","blank":"を入力してください。","confirmation":"と確認の入力が一致しません。","empty":"を入力してください。","equal_to":"は%{count}にしてください。","even":"は偶数にしてください。","exclusion":"は予約されています。","greater_than":"は%{count}より大きい値にしてください。","greater_than_or_equal_to":"は%{count}以上の値にしてください。","inclusion":"は一覧にありません。","invalid":"は不正な値です。","less_than":"は%{count}より小さい値にしてください。","less_than_or_equal_to":"は%{count}以下の値にしてください。","not_a_number":"は数値で入力してください。","not_an_integer":"は整数で入力してください。","odd":"は奇数にしてください。","record_invalid":"バリデーションに失敗しました。 %{errors}","taken":"はすでに存在します。","too_long":"は%{count}文字以内で入力してください。","too_short":"は%{count}文字以上で入力してください。","wrong_length":"は%{count}文字で入力してください。"},"template":{"body":"次の項目を確認してください。","header":{"one":"%{model}にエラーが発生しました。","other":"%{model}に%{count}個のエラーが発生しました。"}}}}}};