import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SecurityPolicy() {
  return (
    <div className="min-h-screen bg-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur border-none rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-bold text-white mb-6">Circle+ Security Policy</h1>
          <p className="text-sm text-gray-400 mb-4">Effective Date: 1st Jan 2024</p>

          <p className="text-gray-300 mb-6">
            At Circle+, we are committed to maintaining the security, confidentiality, and integrity of the data we manage. This Security Policy outlines the protocols, controls, and best practices Circle+ follows to protect our systems, infrastructure, and users' data from unauthorized access, threats, and breaches. It is a critical part of our mission to provide a secure environment for the startups and businesses that use our platform.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Objectives</h2>
            <p className="text-gray-300 mb-2">The objectives of the Circle+ Security Policy are:</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>To protect the confidentiality, integrity, and availability of Circle+ systems and customer data.</li>
              <li>To implement appropriate safeguards that mitigate risks and vulnerabilities.</li>
              <li>To comply with applicable legal, regulatory, and contractual security requirements.</li>
              <li>To establish guidelines for detecting, responding to, and recovering from security incidents.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Scope</h2>
            <p className="text-gray-300 mb-2">This Security Policy applies to:</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>All employees, contractors, and third parties with access to Circle+ systems and data.</li>
              <li>All information systems, applications, cloud infrastructure, and data storage solutions owned or operated by Circle+.</li>
              <li>Customer data processed, stored, or transmitted through Circle+ services.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Roles and Responsibilities</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">3.1 Chief Information Security Officer (CISO)</h3>
            <p className="text-gray-300 mb-4">
              The CISO is responsible for overseeing Circle+'s security strategy, policies, and implementation of security controls.
            </p>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">3.2 Security Team</h3>
            <p className="text-gray-300 mb-4">
              The Security Team is tasked with managing Circle+'s security operations, monitoring systems, responding to incidents, and ensuring compliance with security best practices.
            </p>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">3.3 Employees and Contractors</h3>
            <p className="text-gray-300 mb-4">
              All employees and contractors are responsible for adhering to Circle+'s security policies, completing security training, and promptly reporting any suspected security incidents.
            </p>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">3.4 Third Parties</h3>
            <p className="text-gray-300">
              Third-party vendors and service providers with access to Circle+ systems must comply with our security standards and are subject to audits to ensure compliance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Access Control</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">4.1 User Authentication and Authorization</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Circle+ employs strong authentication mechanisms such as multi-factor authentication (MFA) for accessing sensitive systems.</li>
              <li>Access to systems and data is granted on a need-to-know basis, with role-based access controls (RBAC) in place to ensure appropriate authorization.</li>
              <li>User accounts are regularly reviewed to revoke access for inactive users or those no longer authorized.</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">4.2 Password Policies</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>All users must adhere to Circle+'s password policies, which require strong passwords that are regularly updated.</li>
              <li>Passwords must be at least [insert password requirements] characters long and contain a mix of uppercase letters, lowercase letters, numbers, and symbols.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Protection and Encryption</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">5.1 Data Classification</h3>
            <p className="text-gray-300 mb-4">
              Circle+ categorizes data into sensitivity levels (e.g., public, internal, confidential) and applies security controls appropriate to the classification level.
            </p>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">5.2 Data Encryption</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>All sensitive data, including personal identifiable information (PII) and customer data, is encrypted both at rest and in transit using industry-standard encryption protocols (e.g., AES-256 for data at rest, TLS for data in transit).</li>
              <li>Circle+ maintains encryption key management systems to ensure secure storage and handling of encryption keys.</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">5.3 Data Storage and Retention</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Customer data is stored on secure, encrypted servers.</li>
              <li>Data retention policies are in place to ensure that personal data is only retained as long as necessary for the purposes for which it was collected, or as required by law.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Network Security</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">6.1 Firewalls and Intrusion Detection</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Firewalls are deployed to protect Circle+'s network infrastructure and limit unauthorized traffic.</li>
              <li>Intrusion detection and prevention systems (IDS/IPS) continuously monitor the network for suspicious activities or potential security breaches.</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">6.2 Network Segmentation</h3>
            <p className="text-gray-300 mb-4">
              Critical systems are separated from general systems using network segmentation to minimize the impact of any potential breach.
            </p>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">6.3 VPNs</h3>
            <p className="text-gray-300">
              Secure virtual private networks (VPNs) are used to encrypt traffic and provide secure remote access for employees, contractors, and authorized users working offsite.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Vulnerability Management</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">7.1 Regular Security Audits</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Circle+ conducts regular security audits and assessments to identify potential vulnerabilities within its systems and infrastructure.</li>
              <li>Audits include internal assessments, penetration tests, and external security reviews.</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">7.2 Patching and Updates</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Critical systems, applications, and software are regularly patched and updated to protect against known vulnerabilities.</li>
              <li>Automatic updates are enabled for critical components where possible, and all patches are reviewed and tested before deployment to ensure stability.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">8. Incident Response and Management</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">8.1 Incident Detection</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Circle+ maintains continuous monitoring systems to detect and alert the security team of suspicious activities, intrusions, or unauthorized access attempts.</li>
              <li>All system logs are retained and reviewed regularly to identify potential security incidents.</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">8.2 Incident Response Plan</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Circle+ has a documented incident response plan (IRP) in place to guide the company's actions in the event of a security breach.</li>
              <li>In the event of a breach, Circle+ will:
                <ul className="list-disc list-inside ml-4">
                  <li>Immediately assess and contain the incident.</li>
                  <li>Notify affected users or customers as required by law.</li>
                  <li>Investigate the cause of the breach and implement corrective measures.</li>
                </ul>
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">8.3 Reporting and Notification</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Security incidents must be reported promptly to the CISO and the Security Team.</li>
              <li>Circle+ will notify affected customers and regulatory bodies within the time frames required by law if a data breach involving sensitive customer data occurs.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">9. Business Continuity and Disaster Recovery</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">9.1 Business Continuity Plan</h3>
            <p className="text-gray-300 mb-4">
              Circle+ maintains a business continuity plan to ensure critical services can continue to operate in the event of a disaster or extended outage.
            </p>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">9.2 Disaster Recovery</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Backups of all critical data are performed regularly and stored securely.</li>
              <li>In the event of a data loss or system failure, Circle+ can restore services and data from backup within established recovery time objectives (RTOs).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">10. Employee Training and Awareness</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">10.1 Security Training</h3>
            <p className="text-gray-300 mb-4">
              All Circle+ employees and contractors undergo regular security awareness training to understand the latest security threats and best practices.
            </p>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">10.2 Phishing and Social Engineering</h3>
            <p className="text-gray-300">
              Circle+ regularly conducts phishing and social engineering awareness exercises to ensure that employees are vigilant against potential attacks.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">11. Compliance and Regulatory Requirements</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">11.1 Legal Compliance</h3>
            <p className="text-gray-300 mb-4">
              Circle+ complies with applicable data protection laws, including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other regional privacy regulations.
            </p>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">11.2 Security Frameworks</h3>
            <p className="text-gray-300">
              Circle+ aligns its security practices with recognized industry standards and frameworks such as ISO 27001, NIST, and SOC 2.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">12. Third-Party Risk Management</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">12.1 Vendor Security Assessments</h3>
            <p className="text-gray-300 mb-4">
              Circle+ performs security assessments of all third-party vendors who handle or have access to customer data to ensure they meet our security standards.
            </p>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">12.2 Data Sharing with Third Parties</h3>
            <p className="text-gray-300">
              Circle+ ensures that third-party vendors who handle customer data comply with Circle+'s data protection policies and applicable regulations. Vendors are required to sign data protection agreements  (DPAs) to ensure compliance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">13. Policy Review and Updates</h2>
            <p className="text-gray-300">
              This Security Policy is subject to periodic review and updates. Circle+ will update this policy as necessary to reflect new security practices, technologies, or legal requirements. Any changes will be communicated to all relevant stakeholders.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Security Policy or need further information, please contact us at:
            </p>
            <p className="text-gray-300">
              Circle+<br />
              Email: <Link href="mailto:info@circleplus.xyz" className="text-blue-400 hover:underline">info@circleplus.xyz</Link>
            </p>
          </section>

          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline" className="bg-[#5328f3] text-white hover:text-white hover:bg-[#6942f6] border-none">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}