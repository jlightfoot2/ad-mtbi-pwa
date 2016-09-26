import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
class Library extends Component {
  componentDidMount () {
    this.props.appBarTitle && this.props.appBarTitle('mTBI Library');
  }
  render () {
    return (
      <div>
        <h3>Abstract</h3>
        <p>
Traumatic brain injury (TBI) is a common occurrence in the United States, with an
estimated incidence exceeding 1 million injuries per year. Cognitive, emotional,
behavioral, and physical impairments are common sequelae of TBI and may, in a
significant minority of patients, persist well into the late period following
injury. The etiology of these symptoms in individuals with mild TBI is
controversial, with hypotheses of postconcussive symptom formation variously
ascribing greater or lesser weight to neural damage, pre- and/or post-injury
psychological or psychiatric factors, somatization, malingering, or some
combination of these. Some of these hypotheses reflect biases common to medicolegal or compensation-related contexts, whereas others are derived from recent neuroimaging and electrophysiology studies. Studies of the latter sort suggest that many of the typical postconcussive symptoms are associated with neurobiological dysfunction in one or more areas of the central nervous system. Whether these symptoms constitute a postconcussive syndrome per se is debatable. Instead, it may be more accurate to describe them as commonly co-occurring symptoms rather than as a syndromal sequela of TBI. The present review addresses these issues including the epidemiology and course of recovery from mild TBI and the validity of the postconcussive syndrome. Suggestions regarding the assessment and treatment of individuals with post-concussive symptoms are offered.
        </p>
        <h3>Introduction</h3>
        <p>
Each year in the United States, 235 000 people experience a traumatic brain injury (TBI) that requires
 hospitalization, and as many as 1.1 million additional individuals experience a TBI for which they are
  evaluated and released from an emergency department (National Center for Injury Prevention and Control
   2004). TBI is bimodally distributed by age, with the highest rates of injury occurring in those aged
    15–24 years and those older than 65 years (Kraus and Nourjah 1988). The majority of TBI results from
     motor vehicle accidents, assaults, and falls (Kraus and Nourjah 1988), the first of these two causes
      being more frequent in younger and urban dwelling persons and the third being more common among the
       elderly. Among persons that experience a TBI requiring hospitalization, 50 000 die as a result of
        their injuries, and an additional 80 000 develop partial or total permanent disabilities (National
         Center for Injury Prevention and Control 2004). Approximately 5.3 million Americans are presently
          living with chronic disabilities due to TBI, and the annual cost of TBI in the United States
           exceeds $48 billion (Kraus and Sorenson 1994; National Center for Injury Prevention and Control 2004).
          </p>
          <p>
          Although many physicians are familiar with severe TBI and its management, mild TBI comprises 70%–80% of all such injuries (Kraus and Nourjah 1988; Jennett 1996, 1998). The deficits produced by mild TBI are frequently more subtle, less often recognized, and more contentiously debated than are those resulting from severe TBI (MacKenzie et al 1989; Williams et al 1990; Katz and DeLuca 1992; Dikmen et al 2001). Given the large number of persons that experience mild TBI each year, it is indeed fortunate that the majority of these individuals recover fully within the first year following TBI. However, a nontrivial minority of persons with mild TBI, with estimates ranging between 1% and 20% (Katz and DeLuca 1992; Dikmen et al 2001), will develop persistent cognitive, emotional, behavioral, and physical impairments that extend well into the late (> 1 year) period following TBI.
          </p>
          <p>
          Typical acute and/or chronic postconcussive symptoms include physical problems such as headache, dizziness, and visual disturbances; cognitive impairments such as attention, memory, and executive dysfunction; and emotional or behavioral problems such as irritability, anxiety, depression, affective lability, apathy, and/or impulsivity. The development of these symptoms is predicated on a complex set of factors including neural injury produced by mild TBI, expectational sets on the part of patients and clinicians, pre-existing and/or comorbid post-traumatic psychiatric disorders, and occasionally on conscious and/or unconscious efforts to obtain primary and secondary gains (MacMillan et al 2002; Wood 2004).
          </p>
          <p>
            The cognitive, emotional, behavioral, and physical impairments experienced by mild TBI survivors produce
            substantial disability and costs (Levin, Mattis, et al 1987; Kraus and Nourjah 1988; Montgomery et al 1991;
            Katz and DeLuca 1992). Clinicians working with this population should be familiar with recent advances in
            the basic and clinical neuroscience of mild TBI in order to understand accurately the symptoms with
            which their patients present and also the treatments available for these symptoms.
          </p>
          <p>
            In the service of this goal, the present article reviews the clinical features of mild TBI, recent neuroscience findings relevant to understanding this condition, and the validity of the postconcussive syndrome. This review was predicated on initial searches of the medical literature in PubMed and MEDLINE using the terms “traumatic brain injury”, “brain injury”, “closed head injury”, “craniocerebral trauma”, and “concussion”. These searches were subsequently limited to studies of humans and were anchored to the topic areas into which this review is organized (ie, definition of mild TBI, neurobiology, neuroimaging, electrophysiology, post-concussive syndrome, evaluation, and treatment, with the last of these categories including cognitive impairment, emotional disturbances, and somatic symptoms). Where information in the peer-reviewed literature was lacking and/or where useful summaries of that literature sufficed for the purpose of this review, information published in major textbooks in the field was included. Data from these reviews were synthesized to formulate a neuropsychiatric approach to the issue of mild TBI, and to develop the suggestions offered herein regarding the assessment and treatment of individuals with postconcussive symptoms following mild TBI.
          </p>
          <h3>
            Mild traumatic brain injury
          </h3>
          <p>
            Traumatic brain injury is best defined as the result of the application of either external physical force or rapid acceleration/deceleration forces (eg, mechanical trauma, not anoxia/hypoxia, tumor, stroke) that disrupts brain function as manifested by immediately apparent impairments in cognitive and/or physical function. It is important to note that it is the application of such forces to the brain, rather than to the head per se, that produces a TBI. In other words, not all head injuries produce brain injuries, and some brain injuries (particularly those resulting from acceleration/deceleration forces) may occur without apparent head injury.
          </p>
          <p>
            The Glasgow Coma Scale (GCS) (Teasdale and Jennett 1974) is the most widely known system for injury severity classification in the acute injury period, and is useful when performed properly in that context. The American Congress of Rehabilitation Medicine (ACRM) (1993) definition of mild traumatic brain injury may be of greater use to clinicians attempting to determine after-the-fact whether an event experienced by an individual is characterized fairly as a mild TBI, particularly when GCS scores are unavailable or invalid. This definition states that any one of the following symptoms following external application of force to the brain reflects an injury of severity sufficient to merit classification as a mild TBI: any period of loss of consciousness, any loss of memory for events immediately before (retrograde amnesia) or after (anterograde amnesia) the accident (collectively referred to as the period of post-traumatic amnesia, or PTA), any alteration in mental state at the time of the accident (eg, feeling dazed, disoriented, or confused), or focal neurologic deficit(s) that may or may not be transient. The ACRM definition of mild TBI includes only those injuries in which loss of consciousness is 30 minutes or less, the GCS score at 30 minutes after injury is 13–15, and the duration of PTA is no longer than 24 hours. Injuries exceeding these criteria are considered to be of more than mild severity. Although these criteria are not without criticism (Ruff and Jurica 1999; Arciniegas and Silver 2001), they are at present the most widely accepted definition of mild TBI. In the absence of another universally accepted minimum criteria set for this condition, the authors recommend using these criteria to determine whether an event experienced by a patient is characterized fairly as a TBI.
            <Link to="main/debug">Debug Test</Link>
          </p>
  </div>
    );
  }
}
export default Library;
