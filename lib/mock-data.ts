
export type InterviewStatus = 'scheduled' | 'completed' | 'cancelled' | 'active';

export interface Interview {
  id: string;
  title: string;
  status: InterviewStatus;
  dateCreated: Date;
  candidateName?: string;
  position?: string;
}

export const mockInterviews: Interview[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer Interview',
    status: 'scheduled',
    dateCreated: new Date('2024-03-10T09:30:00'),
    candidateName: 'Alex Johnson',
    position: 'Senior Frontend Developer'
  },
  {
    id: '2',
    title: 'UX Designer Initial Screening',
    status: 'completed',
    dateCreated: new Date('2024-03-08T14:00:00'),
    candidateName: 'Morgan Smith',
    position: 'UX Designer'
  },
  {
    id: '3',
    title: 'Backend Engineer Technical Assessment',
    status: 'active',
    dateCreated: new Date('2024-03-11T11:45:00'),
    candidateName: 'Jamie Williams',
    position: 'Backend Engineer'
  },
  {
    id: '4',
    title: 'Product Manager Second Round',
    status: 'scheduled',
    dateCreated: new Date('2024-03-12T16:00:00'),
    candidateName: 'Taylor Brown',
    position: 'Product Manager'
  },
  {
    id: '5',
    title: 'Data Scientist Interview',
    status: 'cancelled',
    dateCreated: new Date('2024-03-07T10:15:00'),
    candidateName: 'Jordan Lee',
    position: 'Data Scientist'
  },
  {
    id: '6',
    title: 'DevOps Specialist Technical Discussion',
    status: 'scheduled',
    dateCreated: new Date('2024-03-13T13:30:00'),
    candidateName: 'Casey Martin',
    position: 'DevOps Specialist'
  },
  {
    id: '7',
    title: 'Mobile Developer Coding Challenge',
    status: 'active',
    dateCreated: new Date('2024-03-11T09:00:00'),
    candidateName: 'Riley Wilson',
    position: 'Mobile Developer'
  },
  {
    id: '8',
    title: 'QA Engineer Process Discussion',
    status: 'completed',
    dateCreated: new Date('2024-03-09T15:45:00'),
    candidateName: 'Avery Thomas',
    position: 'QA Engineer'
  }
];

export const getStatusColor = (status: InterviewStatus) => {
  switch (status) {
    case 'scheduled':
      return 'bg-blue-100 text-blue-800';
    case 'completed':
      return 'bg-green-100 text-green-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    case 'active':
      return 'bg-amber-100 text-amber-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const dashboardSummary = {
  totalInterviews: mockInterviews.length,
  scheduledInterviews: mockInterviews.filter(i => i.status === 'scheduled').length,
  completedInterviews: mockInterviews.filter(i => i.status === 'completed').length,
  pendingInterviews: mockInterviews.filter(i => i.status === 'active').length,
  cancelledInterviews: mockInterviews.filter(i => i.status === 'cancelled').length,
};
