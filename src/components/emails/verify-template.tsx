import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { headers } from 'next/headers';

interface RaycastMagicLinkEmailProps {
  magicLink: string;
}

const EmailTemplateVerify = ({ magicLink }: RaycastMagicLinkEmailProps) => {
  const headersList = headers();
  const domain = headersList.get('host');

  return (
    <Html>
      <Head />
      <Preview>Verify your email to access Sportify</Preview>
      <Body className="bg-white font-jakarta">
        <Container className="mx-0 my-auto p-8">
          <Img
            src={`https://${domain}/logo.webp`}
            width={48}
            height={48}
            alt="Sportify"
          />
          <Heading className="mt-12 text-xl font-bold">
            🪄 Verify Your Email Address
          </Heading>
          <Section className="my-10">
            <Text className="text-lg">
              Thank you for registering with Sportify! To complete your
              registration, please verify your email address by clicking the
              link below:
            </Text>
            <Button className="text-primary" href={magicLink}>
              👉 Click here to verify your email 👈
            </Button>
            <Text className="mt-4 text-lg">
              This link will expire in 24 hours. If you didn't request this
              email, please ignore it or contact our support team.
            </Text>
          </Section>
          <Section className="my-10">
            <Heading className="text-lg font-bold">
              Why Verify Your Email?
            </Heading>
            <Text className="mt-2 text-lg">
              Verifying your email helps us ensure the security of your account
              and provides you with access to all the features Sportify has to
              offer, including:
            </Text>
            <ul className="mt-2 list-inside list-disc">
              <li>Personalized workout plans</li>
              <li>Exclusive access to fitness resources</li>
              <li>Special offers and updates</li>
            </ul>
          </Section>
          <Section className="my-10">
            <Heading className="text-lg font-bold">Need Help?</Heading>
            <Text className="mt-2 text-lg">
              If you have any questions or need assistance, please contact our
              support team:
            </Text>
            <Text className="mt-2 text-lg">
              <Link className="text-primary" href="mailto:support@sportify.com">
                support@sportify.com
              </Link>
            </Text>
          </Section>
          <Text className="mt-10 text-lg">
            Best regards,
            <br />- The Sportify Team
          </Text>
          <Hr className="mt-10 h-3 border text-primary" />
          <Img
            src={`https://${domain}/logo.webp`}
            width={32}
            height={32}
            style={{
              WebkitFilter: 'grayscale(100%)',
              filter: 'grayscale(100%)',
              margin: '20px 0',
            }}
          />
          <Text className="text-sm text-blue-500">Sportify Inc</Text>
          <Text className="text-sm text-gray-500">
            123 Fitness St, Workout City, FIT 12345
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplateVerify;
