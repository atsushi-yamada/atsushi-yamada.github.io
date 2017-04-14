このサイトについて
===
## サイト概要

コンテンツと言われる部分と査定申込みと言われる部分でサーバが異なる。  
そのためコンテンツ側用、査定申込み側用の2つのcss、img、jsを用意する必要がある。  
お問い合わせは査定申込みともコンテンツとも異なるため、お問い合わせ用にcssとjsを用意している。(imgはコンテンツの共用)

## 各種cssの役割

* pc/style.css・・・PC用css
* sp/style.css・・・スマホ用css
* error/style.css・・・エラーページ（404ページ、50xページ、メンテナンスページ）用css
* plugin/*.css・・・js等で使っているプラグイン用のcss
* satei/**/00x/style.css・・・申込みページで使っているcss。申込みは別サーバにあるので、コンテンツとは別で用意する必要がある。普通車、事故車、商用車用にそれぞれ用意

※プロキシサーバ用のエラーページもある。これは外部cssを読むことができないので、直接head内にstyleが書かれている。(該当ファイル：/kcvhtml/error.html)

## 各種scssの役割

* common・・・PC、SPに共通のものを格納
	* components
		* _base.scss・・・コンテンツ幅の設定。各種タグの基本設定が書かれている。
		* _breadcrums・・・パンくずリストのstyleを記述
		* _buttons.scss・・・ボタン系のstyleを記述
		* _icons.scss・・・アイコン系のstyleを記述。アイコンwebフォントの指定もここ
		* _modal.scss・・・モーダルウィンドウに関するstyleを記述
		* _title.scss・・・見出し系のstyleを記述
		* _tooltip.scss・・・ツールチップ系のstyleを記述予定。今は使ってない
		* _type.scss・・・テキストの装飾に関するstyleを記述
		* _utility.scss・・・配置や余白調整などのstyleを記述
		* satei
			* _icons.scss・・・査定申込みページ用のアイコン系のstyleを記述。アイコンwebフォントの呼び出し元が違うので用意している
	* _color.scss・・・色に関する情報をまとめている。色はコード指定ではなくcolors(col-red)などで呼び出して使うこと
	* _mixin.scss・・・mixinやextendについてまとめている。
* error・・・エラーページ（404ページ、50xページ、メンテナンスページ）用
	* _style.scss
* pc・・・PC用
	* commercial-car
		* _style.scss・・・商用車ページ用（申込みページとは別）
	* components・・・PC用のヘッダー、フッター、ナビゲーション、各ページ共通仕様のstyleをまとめている。
		* _block.scss・・・各ページ共通仕様のstyle
		* _footer.scss・・・フッターのstyleを記述
		* _header.scss・・・ヘッダーのstyleを記述
		* _nav.scss・・・ナビゲーションに関するstyleを記述
	* contact
		* style.scss・・・お問い合わせページ用（コンテンツとも査定申込みとも別、書き出し用のファイルで実際のstyle指定はstep2の中にある）
	* guide
		* _style.scss・・・売却手続きについて調べるカテゴリ全てのstyleを記述（初心者ガイド、廃車ガイド、用語集、よくある質問）
	* jiko
		* _style.scss・・・事故車ページ用（申込みページとは別）
	* kaitori
		* _style.scss・・・通常車ページ用（申込みページとは別）
	* news
		* _style.scss・・・コラム＆ニュースカテゴリのstyleを記述
	* shop
		* _style.scss・・・査定会社について調べるカテゴリ全てのstyleを記述
	* sitemap
		* _style.scss・・・サイトマップページのstyleを記述
	* souba
		* _style.scss・・・買取相場について調べるカテゴリ全てのstyleを記述
	* step2
		* _style.scss・・・査定申込みフォームのstyleを記述（通常車、事故車、商用車、お問い合わせ）
	* top
		* _style.scss・・・トップページ用のstyleを記述
* satei・・・査定申し込み用。ココの中でさらにpcとspに分かれる
	* pc
		* entry
			* accident
				* kcv
					* 001
						* style.scss・・・事故車申し込み用のstyleを記述
			* commercial-car
				* kcv
					* 001
						* style.scss・・・商用車申し込み用のstyleを記述
			* normal
				* kcv
					* 001
						* style.scss・・・通常車申し込み用のstyleを記述

	* sp
		* entry
			* accident
				* kcv
					* 001
						* style.scss・・・事故車申し込み用のstyleを記述
			* commercial-car
				* kcv
					* 001
						* style.scss・・・商用車申し込み用のstyleを記述
			* normal
				* kcv
					* 001
						* style.scss・・・通常車申し込み用のstyleを記述