<script lang="ts">
</script>


<svelte:head>
  <title>くぼっちノート: お問い合わせ</title>
  <meta name="description" content="kubocchi blog contact" />
</svelte:head>

<main>
  <div>
    <h3 class={`Contact_Title`}>お問い合わせ</h3>
    <p class={`Contact_Text`}>お気軽にお問い合わせください</p>
    <form
      class={`Contact_Form`}
      method="post"
      action="https://kubocchi-blog.form.newt.so/v1/7w4L7M8eR"
    >
      <label class={`Contact_Label`} for="name">
        お名前*
      </label>
      <input
        class={`Contact_InputText`}
        id="name"
        name="name"
        required
      />
      <label class={`Contact_Label`} for="email">
        メールアドレス*
      </label>
      <input
        class={`Contact_InputText`}
        id="email"
        name="email"
        type="email"
        required
      />
      <label class={`Contact_Label`} for="message">
        メッセージ*
      </label>
      <textarea
        class={`Contact_Textarea`}
        id="message"
        name="message"
        rows={10}
        required
      ></textarea>
      <button type="submit" class={`Contact_Button`}>
        送信
      </button>
    </form>
  </div>
</main>

<style>
.Contact_Title {
  font-size: 2.5rem;
  margin: 0 0 4px 0;
  padding: 0;
  text-align: center;
  line-height: 1.5;
}
.Contact_Text {
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 0 0 48px 0;
  padding: 0;
  color: #666;
  text-align: center;
}
.Contact_Label {
  display: block;
  font-weight: bold;
  font-size: 1.0rem;
  margin: 0 0 8px 0;
}
.Contact_InputText {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 1.0rem;
  margin: 0 0 24px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: 'Segoe UI Emoji', 'Helvetica Neue', Arial,
    'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
}
.Contact_InputText:hover {
  border: 1px solid #aaa;
}
.Contact_Textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 1.0rem;
  margin: 0 0 24px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: 'Segoe UI Emoji', 'Helvetica Neue', Arial,
    'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
  resize: vertical;
}
.Contact_Textarea:hover {
  border: 1px solid #aaa;
}
.Contact_Button {
  font-size: 1.4rem;
  margin: 0 auto;
  display: block;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  font-weight: bold;
  background: #333;
  color: #fff;
  transition: background 0.2s;
  font-family: 'Segoe UI Emoji', 'Helvetica Neue', Arial,
    'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
  cursor: pointer;
}
.Contact_Button:hover {
  background: #000;
}
</style>