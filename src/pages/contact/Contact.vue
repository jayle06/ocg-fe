<template>
    <div class="admin google">
        <div class="google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3969106662475!2d105.83397921468566!3d21.016798893562985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab84662bea51%3A0xa3fa4dff9266b7f4!2zMTMwIFAuVHJ1bmcgUGjhu6VuZywgVHJ1bmcgUGjhu6VuZywgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1626284969692!5m2!1svi!2s" width="500" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        
        <div class="create-product">
            <div class="create-header">
                <span class="text title">CONTACT TO US</span>
            </div>
            <div class="product-info">
                <div class="form">
                    <span class="text">Your Name</span>
                    <input type="text" placeholder="name" />
                    <span class="text">Email</span>
                    <input type="email" placeholder="email" />
                    <span class="text">Subject</span>
                    <input type="text" placeholder="subject" />
                    <span class="text">Message</span>
                    <textarea placeholder="message" ></textarea>
                </div>
            </div>
            <div class="btn-staff">
                <button class="btn-update">Submit</button>
                <button class="btn-cancel">Cancel</button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name : 'Contact',
}
</script>

<style scoped>
.google{
    justify-content: center;
}

.google-map{
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
}

.form textarea {
    width: 100%;
    height: 130px;
    margin-bottom: 10px;
}

.btn-staff {
    display: flex;
    justify-content: space-around;
}
.btn-staff button {
    border: none;
    color: #fff;
    cursor: pointer;
    height: 40px;
    width: 80px;
}

.btn-update {
    background-color: #16a085;
}

.btn-cancel {
    background-color: #f39c12;
}

.btn-delete {
    background-color: #c0392b;
}
</style>
