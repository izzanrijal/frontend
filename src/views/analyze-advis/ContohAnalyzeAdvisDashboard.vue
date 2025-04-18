<template>
  <VCard class="outradius-card-item">
    <VRow no-gutters>
      <VCol cols="12" md="12">
        <VCard>
          <VCardTitle>
            <span style="color: #005BC5;">Tryout Paket Soal 1-3</span>
          </VCardTitle>
          <VCardItem class="outlined-card-item">
            <VCardSubtitle class="wrap-text">
              Terima kasih telah menyelesaikan analisis soal pada Tryout Paket Soal 1-3. Berdasarkan hasil pengerjaan Anda, kami telah merangkum area-area yang memerlukan perhatian yang dibuat khusus untuk Anda. Dengan mempelajari topik yang disarankan secara urut, Anda akan dapat lebih mudah meningkatkan pemahaman dan hasil tes pada kesempatan berikutnya.
            </VCardSubtitle>
          </VCardItem>
          <VCardItem>
            <div class="advice-title">Rekomendasi &amp; Advice</div>
            <p><b>nilai rata-rata dari ketiga tes &lt; 66</b></p>
            <p>Hasil tryout Anda menunjukkan bahwa nilai belum memenuhi batas kelulusan. Kami sarankan untuk fokus memperdalam pemahaman pada topik-topik yang telah diidentifikasi:</p>
            <ul>
              <li>Manfaatkan waktu Anda untuk berlatih menggunakan soal simulasi tambahan.</li>
              <li>Gunakan sumber daya pendukung, seperti modul pembelajaran atau diskusi kelompok.</li>
              <li>Tetap berlatih secara konsisten untuk meningkatkan keterampilan Anda!</li>
            </ul>
            <p>Dengan dedikasi dan usaha lebih, Anda dapat mencapai hasil yang diharapkan.</p>
          </VCardItem>
        </VCard>
      </VCol>
    </VRow>
  </VCard>
</template>

<script setup>
// Static only
</script>

<style scoped>
.outradius-card-item {
  border-radius: 20px;
  margin-bottom: 20px;
}
.outlined-card-item {
  border: 1px solid #e3e3e3;
  border-radius: 12px;
  margin-bottom: 12px;
}
.advice-title {
  font-weight: 600;
  margin-bottom: 8px;
}
</style>
