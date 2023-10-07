import Container from './container';

/*
Privacy Policy

Effective Date: [Insert Date]

This Privacy Policy ("Policy") sets forth the manner in which Chatument ("we", "us", "our", or "the Company") collects, uses, discloses, and protects the personal information of its clients ("Clients") and their employees ("Users") in relation to their use of our chatbot service ("Service"), which is designed to assist Users by providing access to organizational documentation and answering related inquiries. By accessing or using our Service, Clients and Users acknowledge and agree to the practices and procedures described in this Policy.

1. Collection of Personal Information

1.1. Information Collected from Clients
In order to utilize our Service, Clients are required to provide certain information to us during the account registration process or at subsequent times when accessing and using the Service. This may include, but is not limited to:

- Contact information, such as name, email address, and phone number.
- Organization details, such as company name and address.

1.2. Information Collected from Users
To enable our chatbot to effectively provide accurate responses and access relevant organizational documentation, we collect and process the following types of personal information from Users:

- User profile information from Slack, including name and email address.
- User-generated queries and requests submitted through the chatbot interface.
- Slack notification data to facilitate the delivery of chatbot responses.

1.3. Sensitive Data Encryption
We understand the sensitive nature of the information entrusted to us by our Clients. To protect the confidentiality and integrity of personal data, we employ industry-standard encryption techniques when collecting, transmitting, and storing sensitive information.

2. Use of Personal Information

2.1. Service Provision
The primary purpose for collecting personal information from Clients and Users is to provide and maintain the functionality of our Service. We may use personal information to:

- Authenticate access to organizational documentation.
- Process and respond to User inquiries and requests.
- Analyze and improve the performance and functionality of our Service.
- Communicate with Clients and Users regarding Service updates.

2.2. Information Aggregation
We may aggregate non-identifying information obtained from Clients and Users for the purpose of generating statistical data to improve our Service and for research and analytical purposes. Any aggregated information is handled in such a way that it cannot reasonably be used to identify any individual or organization.

3. Disclosure of Personal Information

3.1. Third-Party Service Providers
Chatument may engage third-party service providers to assist in the provision of our Service. These service providers may have access to personal information solely for the purpose of performing their contracted functions, and they are obligated to safeguard such information in accordance with this Policy.

3.2. Compliance with Legal Obligations
We may disclose personal information if required to do so by law or in response to valid legal requests or orders from governmental authorities or other relevant organizations. This may also include requests to meet national security or law enforcement requirements.

4. Data Retention and Security

4.1. Data Retention
We retain personal information only for as long as necessary to fulfill the purposes outlined in this Policy or as otherwise required by law. When personal information is no longer needed, it will be securely deleted or anonymized.

4.2. Data Security
We take stringent measures to protect personal information from unauthorized access, alteration, disclosure, or destruction. This includes implementing technical, physical, and administrative safeguards, such as encryption, firewalls, and access controls, and regularly assessing and updating our security procedures.

5. User Choices and Rights

5.1. User Consent and Control
Users may choose to provide personal information through their use of the Service. By doing so, they consent to the collection, processing, and use of such information in accordance with this Policy. Users may also control the personal information they provide, and they have the ability to request the modification or deletion of their personal data through our support channels.

5.2. Opt-Out and Marketing Communications
Clients and Users may opt out of receiving promotional communications by following the unsubscribe instructions provided in such communications or by contacting us directly. However, they will continue to receive essential service-related communications necessary for the functioning of our Service.

6. Children's Privacy

Our Service is not intended for use by individuals under the age of 16 without the consent of a parent or guardian. If we become aware that personal information has been collected from a child without parental consent, we will take appropriate steps to remove such information from our servers.

7. Changes to this Policy

We reserve the right to modify this Privacy Policy at any time by posting updated versions on our website. Clients and Users are encouraged to review this Policy periodically to stay informed of any changes.

8. Contact Us

Should you have any questions, concerns, or requests regarding this Policy or our privacy practices, please contact us at [Insert Contact Information].

By continuing to access or use our Service, you acknowledge that you have reviewed this Privacy Policy and consent to the collection, processing, and use of your personal information as described herein.

Last updated: [Insert Date]
*/

const Privacy = () => {
  return (
    <Container>
      <h1 className="mt-3 pb-2 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
        Privacy Policy
      </h1>

      <hr />

      <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-500 lg:text-sm xl:text-sm dark:text-gray-300">
        This Privacy Policy ("Policy") sets forth the manner in which Chatument ("we", "us", "our", or "the Company") collects, 
        uses, discloses, and protects the sensitive information of its client organizations ("Clients") and their employees ("Users") in 
        relation to their use of our chatbot service ("Service"), which is designed to assist Users by providing access to 
        organizational documentation and answering related inquiries. By accessing or using our Service, Clients and Users 
        acknowledge and agree to the practices and procedures described in this Policy.
      </p>

      <h2 className="pb-4 leading-snug text-2xl tracking-tight text-gray-800 lg:leading-tight lg:text-2xl dark:text-white">
        1. Collection of Personal Information
      </h2>

      <h4 className="leading-snug text-lg tracking-tight text-gray-800 lg:leading-tight lg:text-lg dark:text-white">
        1.1. Information Collected from Clients
      </h4>

      <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-500 lg:text-sm xl:text-sm dark:text-gray-300">
        In order to utilize our Service, Clients are required to provide certain information to us during the account registration 
        process or at subsequent times when accessing and using the Service. This may include, but is not limited to: Contact information, 
        such as name and email address or Organization details, such as company name and address.
      </p>

      <h4 className="leading-snug text-lg tracking-tight text-gray-800 lg:leading-tight lg:text-lg dark:text-white">
        1.2. Information Collected from Users
      </h4>

      <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-500 lg:text-sm xl:text-sm dark:text-gray-300">
        To enable our chatbot to effectively provide accurate responses and access relevant organizational documentation, we collect and 
        process the following types of personal information from Users: User profile information from Slack, including name and email address, 
        User-generated queries and requests submitted through the chatbot interface, Slack notification data to facilitate the delivery of chatbot responses.
      </p>

      <h4 className="leading-snug text-lg tracking-tight text-gray-800 lg:leading-tight lg:text-lg dark:text-white">
        1.3. Information Collected from Organizations
      </h4>

      <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-500 lg:text-sm xl:text-sm dark:text-gray-300">
        To enable our chatbot to effectively provide accurate responses we need access to relevant organizational documentation, we collect and 
        process the following types of sensitive information from Organizations: Data stored in Notion (the "Documentation") that the organization have given us access to, including but not
        limited to, pages, databases, and files. Slack conversations in public channels that the organization have given us access to. 
      </p>

      <h4 className="leading-snug text-lg tracking-tight text-gray-800 lg:leading-tight lg:text-lg dark:text-white">
        1.4. Sensitive Data Encryption
      </h4>

      <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-500 lg:text-sm xl:text-sm dark:text-gray-300">
        We understand the sensitive nature of the information entrusted to us by our Clients. To protect the confidentiality and integrity of 
        data, we employ industry-standard encryption techniques when collecting, transmitting, and storing sensitive information.
      </p>

      <h2 className="pb-4 leading-snug text-2xl tracking-tight text-gray-800 lg:leading-tight lg:text-2xl dark:text-white">
        2. Use of Personal Information
      </h2>

      <h4 className="leading-snug text-lg tracking-tight text-gray-800 lg:leading-tight lg:text-lg dark:text-white">
        2.1. Service Provision
      </h4>

      <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-500 lg:text-sm xl:text-sm dark:text-gray-300">
        The primary purpose for collecting personal information from Clients and Users is to provide and maintain the functionality of our Service. 
        We may use personal information to: Authenticate access to organizational documentation, Process and respond to User inquiries and requests, 
        Analyze and improve the performance and functionality of our Service, Communicate with Clients and Users regarding Service updates.
      </p>

      <h4 className="leading-snug text-lg tracking-tight text-gray-800 lg:leading-tight lg:text-lg dark:text-white">
        2.2. Information Aggregation
      </h4>

      <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-500 lg:text-sm xl:text-sm dark:text-gray-300">
        We may aggregate non-identifying information obtained from Clients and Users for the purpose of generating statistical data to improve our 
        Service and for research and analytical purposes. Any aggregated information is handled in such a way that it cannot reasonably be used to 
        identify any individual or organization.
      </p>

      <h2 className="pb-4 leading-snug text-2xl tracking-tight text-gray-800 lg:leading-tight lg:text-2xl dark:text-white">
        3. Disclosure of Personal Information
      </h2>

      <h4 className="leading-snug text-lg tracking-tight text-gray-800 lg:leading-tight lg:text-lg dark:text-white">
        3.1. Third-Party Service Providers
      </h4>

      <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-500 lg:text-sm xl:text-sm dark:text-gray-300">
        Chatument may engage third-party service providers to assist in the provision of our Service. These service providers may have access to 
        personal information solely for the purpose of performing their contracted functions, and they are obligated to safeguard such information.
      </p>

      <h4 className="leading-snug text-lg tracking-tight text-gray-800 lg:leading-tight lg:text-lg dark:text-white">
        3.2. Compliance with Legal Obligations
      </h4>

      <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-500 lg:text-sm xl:text-sm dark:text-gray-300">
        We may disclose personal information if required to do so by law or in response to valid legal requests or orders from governmental authorities 
        or other relevant organizations. This may also include requests to meet national security or law enforcement requirements.
      </p>

      <h2 className="pb-4 leading-snug text-2xl tracking-tight text-gray-800 lg:leading-tight lg:text-2xl dark:text-white">
        4. Data Retention and Security
      </h2>

      <h4 className="leading-snug text-lg tracking-tight text-gray-800 lg:leading-tight lg:text-lg dark:text-white">
        4.1. Data Retention
      </h4>

      <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-500 lg:text-sm xl:text-sm dark:text-gray-300">
        We retain sensitive information only for as long as necessary to fulfill the purposes outlined in this Policy or as otherwise required by law. 
        When sensitive information is no longer needed, it will be securely deleted or anonymized.
      </p>

      <h4 className="leading-snug text-lg tracking-tight text-gray-800 lg:leading-tight lg:text-lg dark:text-white">
        4.2. Data Security
      </h4>

      <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-500 lg:text-sm xl:text-sm dark:text-gray-300">
        We take stringent measures to protect sensitive information from unauthorized access, alteration, disclosure, or destruction. This includes 
        implementing technical, physical, and administrative safeguards, such as encryption, firewalls, and access controls, and regularly assessing 
        and updating our security procedures.
      </p>

      <h2 className="pb-4 leading-snug text-2xl tracking-tight text-gray-800 lg:leading-tight lg:text-2xl dark:text-white">
        5. User Choices and Rights
      </h2>

      <h4 className="leading-snug text-lg tracking-tight text-gray-800 lg:leading-tight lg:text-lg dark:text-white">
        5.1. User Consent and Control
      </h4>

      <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-500 lg:text-sm xl:text-sm dark:text-gray-300">
        Users may choose to provide personal information through their use of the Service. By doing so, they consent to the collection, processing,
        and use of such information in accordance with this Policy. Users may also control the personal information they provide, and they have the 
        ability to request the modification or deletion of their personal data through our support channels.
      </p>

      <h4 className="leading-snug text-lg tracking-tight text-gray-800 lg:leading-tight lg:text-lg dark:text-white">
        5.2. Client Consent and Control
      </h4>

      <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-500 lg:text-sm xl:text-sm dark:text-gray-300">
        Clients provide sensitive information through their use of the Service. By doing so, they consent to the collection, processing,
        and use of such information in accordance with this Policy. Clients may also control the sensitive information they provide, and they have the 
        ability to request the modification or deletion of their sensitive data through our support channels.
      </p>

      <h4 className="leading-snug text-lg tracking-tight text-gray-800 lg:leading-tight lg:text-lg dark:text-white">
        5.3. Opt-Out and Marketing Communications
      </h4>

      <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-500 lg:text-sm xl:text-sm dark:text-gray-300">
        Clients and Users may opt out of receiving promotional communications by following the unsubscribe instructions provided in such communications
        or by contacting us directly. However, they will continue to receive essential service-related communications necessary for the functioning of our Service.
      </p>

      <h2 className="pb-4 leading-snug text-2xl tracking-tight text-gray-800 lg:leading-tight lg:text-2xl dark:text-white">
        6. Children's Privacy
      </h2>

      <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-500 lg:text-sm xl:text-sm dark:text-gray-300">
        Our Service is not intended for use by individuals under the age of 16 without the consent of a parent or guardian. If we become aware that
        sensitive information has been collected from a child without parental consent, we will take appropriate steps to remove such information from our servers.
      </p>

      <h2 className="pb-4 leading-snug text-2xl tracking-tight text-gray-800 lg:leading-tight lg:text-2xl dark:text-white">
        7. Changes to this Policy
      </h2>

      <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-500 lg:text-sm xl:text-sm dark:text-gray-300">
        We reserve the right to modify this Privacy Policy at any time by posting updated versions on our website. Clients and Users are encouraged to 
        review this Policy periodically to stay informed of any changes.
      </p>

      <h2 className="pb-4 leading-snug text-2xl tracking-tight text-gray-800 lg:leading-tight lg:text-2xl dark:text-white">
        8. Contact Us
      </h2>

      <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-500 lg:text-sm xl:text-sm dark:text-gray-300">
        Should you have any questions, concerns, or requests regarding this Policy or our privacy practices, please contact us via our support channels.
      </p>
    </Container>
  );
};

export default Privacy;
