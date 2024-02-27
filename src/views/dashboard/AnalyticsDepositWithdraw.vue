<script setup>
import americanBank from '@images/logos/american-bank.png'
import aws from '@images/logos/aws.png'
import citiBank from '@images/logos/citi-bank.png'
import digitalOcean from '@images/logos/digital-ocean.png'
import github from '@images/logos/github.png'
import google from '@images/logos/google.png'
import gumroad from '@images/logos/gumroad.png'
import mastercardLabel from '@images/logos/mastercard-label.png'
import slack from '@images/logos/slack.png'
import stripe from '@images/logos/stripe.png'

const deposits = [
  {
    title: 'Infeksi Abdomen',
    subtitle: 'Grup Topik Gastroenterohepatologi',
    amount: '+$4,650',
    logo: gumroad,
  },
  {
    title: 'Gawat Napas (Respiratory Distress)',
    subtitle: 'Grup Topik Respirasi',
    amount: '+$92,705',
    logo: mastercardLabel,
  },
  {
    title: 'Fisiologi Kehamilan, dan lainnya',
    subtitle: 'Grup Topik Reproduksi',
    amount: '+$957',
    logo: stripe,
  },
  {
    title: 'Fisiologi Kehamilan, dan lainnya',
    subtitle: 'Grup Topik Reproduksi',
    amount: '+$957',
    logo: stripe,
  },
  {
    title: 'Rhinitis Kronis',
    subtitle: 'Grup Topik THT-KL',
    amount: '+$8,934',
    logo: citiBank,
  },
]

const withdraws = [
  {
    title: 'Google Adsense',
    subtitle: 'PayPal deposit',
    amount: '-$145',
    logo: google,
  },
  {
    title: 'GitHub Enterprise',
    subtitle: 'Security & compliance',
    amount: '-$1870',
    logo: github,
  },
  {
    title: 'Upgrade Slack Plan',
    subtitle: 'Debit card deposit',
    amount: '-$450',
    logo: slack,
  },
  {
    title: 'DigitalOcean',
    subtitle: 'Cloud Hosting',
    amount: '-$540',
    logo: digitalOcean,
  },
  {
    title: 'AWS Account',
    subtitle: 'Choosing a Cloud Platform',
    amount: '-$21',
    logo: aws,
  },
]
</script>

<template>
  <VCard>
    <VRow no-gutters>
      <VCol
        cols="12"
        md="12"
      >
        <VCardItem>
          <VCardTitle><span style="color: #0080ff;">Daftar Topik/Penyakit Prioritas</span></VCardTitle>

          <template #append>
            <h6 class="text-h6">
              <a
                style="color: #0080ff;"
                href="javascript:void(0)"
              >View All</a>
            </h6>
          </template>
        </VCardItem>

        <VCardText>
          <VList class="card-list">
            <VListItem
              v-for="deposit in deposits"
              :key="deposit.logo"
            >
              
              <VListItemTitle class="font-weight-medium mb-1 custom-title-style">
                <span style="color: #0080ff;">{{ deposit.title }}</span>
              </VListItemTitle>
              <VListItemSubtitle class="text-body-1">
                <span style="color: #0080ff;">{{ deposit.subtitle }}</span>
              </VListItemSubtitle>
            </VListItem>
          </VList>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 1.25rem;
}

.custom-title-style {
  margin-bottom: 0px !important;
}
</style>
